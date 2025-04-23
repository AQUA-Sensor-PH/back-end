// import express from 'express';
// import { createMeasurement, getAllMeasurements } from '../controllers/MeasurementController.js';

// const router = express.Router();

// router.post('/create_measurement', createMeasurement);
// router.get('/get_all_measurements', getAllMeasurements);

// export default router;

import express from 'express';
import { createMeasurement, getAllMeasurements } from '../controllers/MeasurementController.js';

const router = express.Router();

// Rota para criar uma nova medição
router.post('/valor', createMeasurement);

// Rota para buscar todas as medições
router.get('/get_all_measurements', getAllMeasurements);

export default router;