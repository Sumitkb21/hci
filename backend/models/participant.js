import mongoose from "mongoose";

const schema = new mongoose.Schema({
    fullName: String,
    dob: String,
    gender: String,
    maritalStatus: String,
    address: String,
    phoneNumber: String,
    email: String,
    employmentStatus: String,
    occupation: String,
    educationLevel: String,
    heartRate: Number,
    bloodPressure: String,
    respiratoryRate: Number,
    bodyTemperature:Number,
    oxygenSaturation: Number,
    weight: Number,
    height: Number,
    ecg: String,
    bloodGlucose: Number,
    urineOutput: Number,
    createdAt: {
        type: Date,
        default : Date.now(),
    },
});
 



export const Participant = mongoose.model("Participant" , schema );
