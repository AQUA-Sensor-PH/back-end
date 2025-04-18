import { DataTypes } from "sequelize";
import database from "../db/conn.js";

export const Pool = database.define("Pool", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    length: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    width: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    depth: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    volume: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: 'Pools'
});
