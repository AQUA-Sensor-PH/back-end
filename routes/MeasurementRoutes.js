import express from 'express';
import { createMeasurement, getAllMeasurements } from '../controllers/MeasurementController.js';

const router = express.Router();

router.post('/create_measurement', createMeasurement)
router.get('/get_all_measurements', getAllMeasurements);

export default router;