import express from 'express';
import { createRecommendation, getAllRecommendations } from '../controllers/RecommendationController.js';

const router = express.Router();

router.post('/create_recommendation', createRecommendation);
router.get('/get_all_recommendations', getAllRecommendations);

export default router;