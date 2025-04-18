import { Recommendation } from "../models/RecommendationModel.js";

// CREATE RECOMMENDATION

export async function createRecommendation(req, res) {
    try {
        const recommendation = await Recommendation.create(req.body);
        res.status(200).json({ message: "Recommendation created", recommendation });
    } catch (error) {
        console.error("Error creating recommendation:", error); // <-- Added log in terminal
        res.status(500).json({ 
            message: "Error creating recommendation", 
            error: error.message // <-- Returns the real error message
        });
    };
};

// GET ALL RECOMMENDATIONS

export async function getAllRecommendations(req, res) {
    try {
        const recommendations = await Recommendation.findAll();
        res.status(200).json({ message: "All recommendations listed", recommendations });
    } catch (error) {
        res.status(400).json({ message: "Error listing all recommendations! ", error });
    };
};
