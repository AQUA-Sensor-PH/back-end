import { DataTypes } from "sequelize";
import database from "../db/conn.js";

export const Product = database.define("Product", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    action_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active_compound: {
        type: DataTypes.STRING,
        allowNull: false
    },
    density: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    concentration: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: "Products"
});
