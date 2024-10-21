import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/products.routes.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import morgan from 'morgan';
import cors from "cors";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config()


const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/', 'index.html'));
  });
app.use(cors())
app.use(express.json())
app.use(productRoutes)
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '../build/')));

export default app