import { Measurement } from "../models/MeasurementModel.js";

// CREATE MEASUEMENT

export const createMeasurement = async (req, res) => {
    const { ph, raw } = req.body;

    if (ph != null && raw != null) {
        try {
            const measurement = await Measurement.create({
                current_ph: parseFloat(parseFloat(ph).toFixed(2)),
                raw: parseFloat(raw)
            });

            console.log(`📥 pH salvo no banco: ${measurement.current_ph} | Temp: ${measurement.raw}`);
            res.status(200).json({ message: "Measurement saved", measurement });

        } catch (error) {
            console.error("❌ Erro ao salvar no banco:", error);
            res.status(500).json({ message: "Erro ao salvar medição", error });
        }
    } else {
        console.log("❌ Dados inválidos recebidos:", req.body);
        res.status(400).send('Dados inválidos');
    };
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
