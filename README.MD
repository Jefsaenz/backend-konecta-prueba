# Software de Gestión de Inventario para Cafeterías KONECTA

## Descripción

Este software permite a KONECTA gestionar el inventario de sus cafeterías de manera eficiente. Permite la creación, edición, eliminación y listado de productos, así como la realización de ventas. El sistema asegura que solo los productos con stock disponible se muestren para la venta.

## Funcionalidades

- **Gestión de Productos:**
  - Crear nuevos productos con los siguientes datos:
    - ID
    - Nombre de producto (OBLIGATORIO)
    - Referencia (OBLIGATORIO)
    - Precio (ENTERO OBLIGATORIO)
    - Peso (ENTERO OBLIGATORIO)
    - Categoría (OBLIGATORIO)
    - Stock (ENTERO OBLIGATORIO)
    - Fecha de creación (date OBLIGATORIO)
  - Editar productos existentes.
  - Eliminar productos.
  - Listar todos los productos registrados en el sistema.

- **Gestión de Ventas:**
  - Mostrar una lista desplegable con los productos disponibles para la venta.
  - Filtrar productos que no tienen stock.
  - Permitir la entrada de la cantidad a vender.
  - Actualizar el stock de productos restando la cantidad vendida.
  - Registrar las ventas en una tabla de historial de ventas.

## Requisitos

- Node.js v14 o superior

## Creación de la base de datos:

- Se debe crear la base de datos antes de ejecutar la aplicación, ya Sequelize ORM crea las tablas definidas automáticamente (Información en el archivo .env)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone -b master https://github.com/Jefsaenz/backend-konecta-prueba.git

2. Navega al directorio del proyecto:
   ```bash
   cd nombre_del_repositorio

3. Instala las dependencias:
   ```bash
   npm install


4. Ejecuta la aplicación:
   ```bash
   npm start
