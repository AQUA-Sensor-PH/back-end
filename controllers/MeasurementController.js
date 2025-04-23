import { Measurement } from "../models/MeasurementModel.js";

// CREATE MEASUEMENT

export const createMeasurement = async (req, res) => {
    const { ph, raw } = req.body;

    if (!ph || !raw) {
        console.log("❌ Dados inválidos recebidos:", req.body);
        return res.status(400).send("Dados inválidos");
    }

    try {
        const newMeasurement = await Measurement.create({
            current_ph: parseFloat(ph),
            temperature: parseFloat(raw)
        });

        console.log(`📥 Medição salva - pH: ${ph.toFixed(2)} | Temperatura: ${raw}`);
        res.status(201).json(newMeasurement);
    } catch (error) {
        console.error("❌ Erro ao salvar medição:", error);
        res.status(500).send("Erro interno do servidor");
    }
};

// GET ALL MEASUEMENTS

export async function getAllMeasurements(req, res) {
    try{
        const measurement = await Measurement.findAll();
        res.status(200).json({ message: "All measurements listed", measurement });
    } catch (error) {
        res.status(400).json({ message: "Error listen all measurements! ", error });
    };
};




// create measurement
// export async function createMeasurement(req, res) {
//     try {
//         const { ph, raw } = req.body;

//         // Validação simples
//         if (ph == null || raw == null) {
//             return res.status(400).json({ message: "ph e raw são obrigatórios." });
//         }

//         // Criação da medição
//         const measurement = await Measurement.create({
//             current_ph: parseFloat(ph),
//             temperature: parseFloat(raw) // Usando "raw" como temperatura, você pode ajustar conforme necessário
//         });

//         res.status(201).json({ message: "Measurement created", measurement });
//     } catch (error) {
//         console.error("Erro ao criar measurement:", error);
//         res.status(500).json({ message: "Error creating measurement", error: error.message });
//     }
// }

// export async function createMeasurement(req, res) {
//     try{
//         const measurement = await Measurement.create(req.body);
//         res.status(200).json({ message: "Measurement created", measurement});
//     } catch (error) {
//         res.status(500).json({ message: "Error creating measurement", error });
//     };
// };
