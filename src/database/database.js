import Sequelize from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host:  process.env.HOST,
        dialect: process.env.DIALECT,
        timezone: '-05:00',
    }
);

export async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connectDB()