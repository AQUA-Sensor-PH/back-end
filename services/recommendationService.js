import { Recommendation } from "../models/RecommendationModel.js";
import { Product } from "../models/ProductModel.js";
import { Measurement } from "../models/MeasurementModel.js";
import { v4 as uuidv4 } from 'uuid';

export const gerarRecomendacao = async ({ measurement }) => {
  const current_ph = measurement.current_ph;

  // Define os limites ideais para banho
  const idealMinPh = 7.2;
  const idealMaxPh = 7.6;

  let product;
  let desired_ph;
  let status = "";

  if (current_ph > idealMaxPh) {
    product = await Product.findOne({ where: { action_type: "Redutor de pH" } });
    desired_ph = 7.4; // Valor ideal para correção
    status = "Usar redutor de pH";
  } else if (current_ph < idealMinPh) {
    product = await Product.findOne({ where: { action_type: "Elevador de pH" } });
    desired_ph = 7.4; // Valor ideal para correção
    status = "Usar elevador de pH";
  } else {
    console.log("✅ pH está ideal para banho. Sem recomendação.");
    return null;
  }

  if (!product) {
    console.warn("⚠️ Produto adequado não encontrado.");
    return null;
  }

  const product_quantity = Math.abs(current_ph - desired_ph) * 10;

  const recommendation = await Recommendation.create({
    id: uuidv4(),
    id_measurement: measurement.id,
    id_product: product.id,
    pool_volume: measurement.pool_id,
    desired_ph,
    measured_ph: current_ph,
    product_quantity,
    unit_measure: "ml",
    status
  });

  console.log("📦 Recomendação criada automaticamente:", recommendation.id);

  return recommendation;
};
