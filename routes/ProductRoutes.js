import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/ProductController.js';

const router = express.Router();

router.post('/create_product', createProduct);
router.get('/get_all_products', getAllProducts);
router.get('/get_product/:id', getProductById);
router.put('/update_product/:id', updateProduct);
router.delete('/delete_product/:id', deleteProduct);

export default router;
