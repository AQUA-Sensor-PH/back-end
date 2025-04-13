import { Pool } from "../models/PoolModel";

// CREATE POOL

export async function createPool(req, res) {
    try {
        const pool = await Pool.create(req.body);
        res.status(201).send({ messege: "Customer created", pool });
    } catch (error) {
        res.status(500).send({ messege: "Error creating customer", error });
    };
};

// GET ALL POOL

export async function getAllCustomers(req, res) {
    try {
        const pool = await Pool.findAll();
        res.status(200).json({ message: "Clientes Listados", pool });
    } catch (error) {
        res.status(400).json(error);
    };
};

// UPDATE CUSTOMER

export async function updateCustomer(req, res) {
    try {
        const { id } = req.params;
        const { name, length, width, depth, volume } = req.body;

        const [numberOfAffectedRows] = await Pool.update(
            { name, length, width, depth, volume },
            { where: { id } }
        );
        if (numberOfAffectedRows > 0) {
            const updatedPool = await Pool.findByPk(id);
            return res.status(200).json(updatedPool);
        } else {
            return res.status(404).json({ message: "Customer não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar o Customer", error });
    }
};

// DELETE CUSTOMER

export async function deleteCustomer(req, res) {
    try {
        const { id } = req.params;
        const result = await Pool.destroy({ where: { id } });

        if (result) {
            return res.status(200).json({ message: "Customer deletado com sucesso" });
        } else {
            return res.status(404).json({ message: "Customer não encontrado" });
        };
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar o Customer", error });
    };
};