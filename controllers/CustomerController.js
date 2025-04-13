import { Customer } from "../models/CustimerModel.js";

// CREATE CUSTOMER

export async function createCustomer(req, res) {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).send({ messege: "Customer created", customer });
    } catch (error) {
        res.status(500).send({ messege: "Error creating customer", error });
    };
};

// GET CUSTOMER BY ID

export async function getCustomerById(req, res) {
    try {
        const { id } = req.params;
        const customer = await Customer.findByPk(id);
        if (customer) {
            return res.status(200).json(customer);
        } else {
            return res.status(404).json({ message: "Customer não encontrado" });
        };
    } catch (error) {
        res.status(500).send(error);
    };
};

// GET ALL CUSTOMERS

export async function getAllCustomers(req, res) {
    try {
        const customers = await Customer.findAll();
        res.status(200).json({ message: "Clientes Listados", customers });
    } catch (error) {
        res.status(400).json(error);
    };
};

// UPDATE CUSTOMER

export async function updateCustomer(req, res) {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const [numberOfAffectedRows] = await Customer.update(
            { name, email, password },
            { where: { id } }
        );
        if (numberOfAffectedRows > 0) {
            const updatedCustomer = await Customer.findByPk(id);
            return res.status(200).json(updatedCustomer);
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
        const result = await Customer.destroy({ where: { id } });

        if (result) {
            return res.status(200).json({ message: "Customer deletado com sucesso" });
        } else {
            return res.status(404).json({ message: "Customer não encontrado" });
        };
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar o Customer", error });
    };
};