import express from 'express';
import { createPool, getAllPools, updatePool, deletePool } from '../controllers/PoolController.js';

const router = express.Router();

router.post('/create_pool', createPool);
router.get('/get_all_pools', getAllPools);
router.put('/update_pool/:id', updatePool);
router.delete('/delete_pool/:id', deletePool);

export default router;