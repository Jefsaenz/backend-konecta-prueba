import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

const Products = sequelize.define(
	'products',
	{
		id_product: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		product_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		reference: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		date: {
			type: Sequelize.DATE, 
			defaultValue: Sequelize.NOW
		},
	},
	{
		timestamps: false
	}
);

export default Products