import { Measurement } from "../models/MeasurementModel";

// CREATE MEASUEMENT

export async function createMeasurement(req, res) {
    try{
        const measurement = await Measurement.create(requestAnimationFrame.body);
        res.status(200).json({ message: "Measurement created", measurement});
    } catch (error) {
        res.status(500).json({ message: "Error creating measurement", error });
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
