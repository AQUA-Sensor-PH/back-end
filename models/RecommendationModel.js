import { DataTypes } from "sequelize";
import database from "../db/conn.js";

import { Measurement } from "./MeasurementModel.js";
import { Product } from "./ProductModel.js";
import { Pool } from "./PoolModel.js";

export const Recommendation = database.define("Recommendations", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id_measurement: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Measurement,
            key: 'id'
        }
    },
    id_product: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: Product,
            key: 'id'
        }
    },
    pool_volume: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: Pool,
            key: 'id'
        }
    },
    desired_ph: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    product_quantity: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    unit_measure: {
        type: DataTypes.STRING,
        allowNull: true
    },
    measured_ph: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: 'Recommendations'
});
