import app from './app.js'
import { sequelize } from "./database/database.js";
import './models/Products.js'
import './models/Sales.js'
const port = process.env.PORT

sequelize.sync()
app.listen(port)
console.log('Server on port: ', port)