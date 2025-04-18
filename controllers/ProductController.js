import { Product } from "../models/ProductModel.js";

// CREATE PRODUCT

export async function createProduct(req, res) {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ message: "Product created", product });
    } catch (error) {
        console.error("Erro ao criar produto:", error); // <-- Adiciona log no terminal
        res.status(500).json({ 
            message: "Error creating product", 
            error: error.message // <-- Retorna a mensagem real do erro
        });
    };
};

// GET ALL PRODUCTS

export async function getAllProducts(req, res) {
    try {
        const products = await Product.findAll();
        res.status(200).json({ message: "All products listed", products });
    } catch (error) {
        res.status(400).json({ message: "Error listing all products! ", error });
    };
};

// GET PRODUCT BY ID

export async function getProductById(req, res) {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product found", product });
    } catch (error) {
        res.status(400).json({ 
            message: "Error creating product", 
            error: error.message
        });
    };
};

// UPDATE PRODUCT

export async function updateProduct(req, res) {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await Product.update(req.body, { where: { id } });

        res.status(200).json({ message: "Product updated" });
    } catch (error) {
        res.status(400).json({ message: "Error updating product", error });
    };
};

// DELETE PRODUCT

export async function deleteProduct(req, res) {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await Product.destroy({ where: { id } });

        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting product", error });
    };
};
