import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

const Sales = sequelize.define(
	'sales',
	{
		id_sale: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		producto_id : {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		timestamps: false
	}
);
export default Sales