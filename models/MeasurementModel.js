import { DataTypes } from "sequelize";
import database from "../db/conn.js";

export const Measurement = database.define("Measurements", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    current_ph: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    temperature: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'Measurements'
});
