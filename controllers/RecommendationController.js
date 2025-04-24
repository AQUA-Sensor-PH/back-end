import { Recommendation } from "../models/RecommendationModel.js";

import { Product } from "../models/ProductModel.js";

// CREATE RECOMMENDATION

export const createRecommendation = async (req, res) => {
    try {
        const { id_measurement, pool_volume_id, desired_ph } = req.body;
  
      // Buscar a medição correspondente
        const measurement = await Measurement.findByPk(id_measurement);
        if (!measurement) {
            return res.status(404).json({ error: "Measurement not found" });
        }
  
        const current_ph = measurement.ph; // assumindo que Measurement tem um campo 'ph'
    
        // Verificar se o pH está alto ou baixo
        let product;
        if (current_ph > desired_ph) {
            // pH está alto, precisa REDUZIR
            product = await Product.findOne({ where: { action_type: "Redutor de pH" } });
        } else if (current_ph < desired_ph) {
            // pH está baixo, precisa AUMENTAR
            product = await Product.findOne({ where: { action_type: "Elevador de pH" } });
        } else {
            return res.status(200).json({ message: "pH já está no nível ideal" });
        }
    
        if (!product) {
            return res.status(404).json({ error: "Produto adequado não encontrado" });
        }
    
        // Simulação da quantidade — aqui você pode criar uma fórmula real depois
        const product_quantity = Math.abs(current_ph - desired_ph) * 10;
    
        // Criar a recomendação
        const recommendation = await Recommendation.create({
            id: uuidv4(),
            id_measurement,
            id_product: product.id,
            pool_volume: pool_volume_id,
            desired_ph,
            product_quantity,
            unit_measure: "ml"
        });
    
        return res.status(201).json(recommendation);
  
    } catch (error) {
        console.error("Erro ao criar recomendação:", error);
        res.status(500).json({ error: "Erro ao criar recomendação" });
    };
};

// export async function createRecommendation(req, res) {
//     try {
//         const recommendation = await Recommendation.create(req.body);
//         res.status(200).json({ message: "Recommendation created", recommendation });
//     } catch (error) {
//         console.error("Error creating recommendation:", error); // <-- Added log in terminal
//         res.status(500).json({ 
//             message: "Error creating recommendation", 
//             error: error.message // <-- Returns the real error message
//         });
//     };
// };

// GET ALL RECOMMENDATIONS

export async function getAllRecommendations(req, res) {
    try {
        const recommendations = await Recommendation.findAll();
        res.status(200).json({ message: "All recommendations listed", recommendations });
    } catch (error) {
        res.status(400).json({ message: "Error listing all recommendations! ", error });
    };
};
