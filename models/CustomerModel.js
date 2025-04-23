import { DataTypes } from "sequelize";
import database from "../db/conn.js";

import { Pool } from "./PoolModel.js";

export const Customer = database.define("Customer", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pools: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Pools',
            key: 'id'
        }
    }
}, {
    timestamps: true,
    tableName: 'Customers'
});
