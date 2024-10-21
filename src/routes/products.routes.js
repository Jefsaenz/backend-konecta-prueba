import { Router } from 'express'
import { createProduct, deleteProduct, getAvailableProducts, getOneProduct, getProducts, getSales, sellProduct, updateProduct } from '../controllers/products.controller.js'
const router = Router()

router.get('/api/v1/getProducts', getProducts)
router.post('/api/v1/createProduct', createProduct)
router.patch('/api/v1/updateProduct/:id',updateProduct)
router.delete('/api/v1/deleteProduct/:id', deleteProduct)
router.get('/api/v1/getOneProduct/:id', getOneProduct)

// ventas
router.get('/api/v1/getSales', getSales)
router.get('/api/v1/getAvailableProducts', getAvailableProducts)
router.post('/api/v1/sellProduct', sellProduct)

export default router