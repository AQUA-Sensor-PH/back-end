import { Pool } from "../models/PoolModel.js";

// CREATE POOL

export async function createPool(req, res) {
    try {
        const { name, length, width, depth } = req.body;

        if (!length || !width || !depth) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        };

        const volume = length * width * depth;

        const pool = await Pool.create({
            name,
            length,
            width,
            depth,
            volume
        });
        res.status(201).send({ messege: "Pool created", pool });
    } catch (error) {
        res.status(500).send({ messege: "Error creating pool", error });
    };
};

// GET ALL POOL

export async function getAllPools(req, res) {
    try {
        const pool = await Pool.findAll();
        res.status(200).json({ message: "Piscinas Listados", pool });
    } catch (error) {
        res.status(400).json(error);
    };
};

// UPDATE POOL

export async function updatePool(req, res) {
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
            return res.status(404).json({ message: "Piscinas não encontradas" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar a Piscina", error });
    }
};

// DELETE POOL

export async function deletePool(req, res) {
    try {
        const { id } = req.params;
        const result = await Pool.destroy({ where: { id } });

        if (result) {
            return res.status(200).json({ message: "Piscina deletado com sucesso" });
        } else {
            return res.status(404).json({ message: "Piscina não encontrado" });
        };
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar o Piscina", error });
    };
};