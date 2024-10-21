import { sequelize } from '../database/database.js'
import Products from '../models/Products.js'
import Sales from '../models/Sales.js'
import { Op, QueryTypes } from 'sequelize';

// creación de productos
export const createProduct = async (req, res) => {

  try {
    const { product_name, reference, price, weight, category, stock } = req.body
    await Products.create({
      product_name,
      reference,
      price,
      weight,
      category,
      stock
    })
    return res.status(200).json({ message: 'producto creado correctamente' })
  } catch (error) {
    console.log('error al crear producto:', error)
    return res.status(500).json({ message: error.message })
  }

}

// listar todos los productos registrados en el sistema.
export const getProducts = async (req, res) => {

  try {
    const allProducts = await Products.findAll({
      attributes: {
        include: [
          [sequelize.fn('DATE_FORMAT', sequelize.col('date'), '%Y-%m-%d %H:%i:%s'), 'formattedDate']
        ]
      }
    })
    return res.json(allProducts)

  } catch (error) {

    console.log('error al listar los productos:', error)
    return res.status(500).json({ message: error.message })
  }
}

// edición de los productos,
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body;
    const updateProd = await Products.findByPk(id);
    if (updateProd) {
      await Products.update(updateData, { where: { id_product: id } });
      return res.status(200).json({ message: 'producto actualizado' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// eliminación de productos
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deleteProd = await Products.findByPk(id);
    if (deleteProd) {
      await Products.destroy({
        where: {
          id_product: id
        }
      })
      return res.status(200).json({ message: 'producto eliminado' })

    }
    res.status(200).json({ message: 'producto no existe' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// obtener un producto
export const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params
    const getProduct = await Products.findOne({
      where: {
        id_product: id,
      },
      attributes: {
        include: [
          [sequelize.fn('DATE_FORMAT', sequelize.col('date'), '%Y-%m-%d %H:%i:%s'), 'formattedDate']
        ]
      }
    })

    if (!getProduct) {
      return res.status(200).json({ message: 'el producto no existe' })
    }
    res.status(200).json({ getProduct })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


// Venta del producto


// productos disponibles
export const getAvailableProducts = async (req, res) => {
  try {
    const availableProducts = await Products.findAll({
      where: {
        stock: {
          [Op.gt]: 0
        }
      },
      attributes: {
        include: [
          [sequelize.fn('DATE_FORMAT', sequelize.col('date'), '%Y-%m-%d %H:%i:%s'), 'formattedDate']
        ]
      }
    });

    return res.status(200).json(availableProducts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// realizar la venta de un producto
export const sellProduct = async (req, res) => {
  const { producto_id, quantity } = req.body

  try {
    const getproduct = await Products.findByPk(producto_id)

    if (!getproduct || getproduct.stock < quantity) {
      return res.status(400).json({ message: 'producto no disponible o stock insuficiente.' });
    }

    // actualizar el campo de stock
    getproduct.stock -= quantity
    await getproduct.save()

    // registrar en una tabla la venta realizada.
    await Sales.create({
      producto_id,
      quantity,
      total_sale: getproduct.price * quantity,
      saleDate: new Date()
    });

    res.status(200).json({ message: 'venta registrada con éxito.' });
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

// tabla de la venta realizada.
export const getSales = async (req, res) => {

  try {
    const allSales = await sequelize.query(`
      SELECT v.id_sale, v.producto_id, v.quantity, p.product_name
      FROM sales v
      JOIN products p 
      ON v.producto_id = p.id_product
    `, {
      type: QueryTypes.SELECT
    })    
    return res.json(allSales)

  } catch (error) {

    console.log('error al listar las ventas:', error)
    return res.status(500).json({ message: error.message })
  }
}

