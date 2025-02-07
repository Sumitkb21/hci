import mongoose from "mongoose";

const schema = new mongoose.Schema({
    fullName: String,
    dob: String,
    gender: String,
    maritalStatus: String,
    address: String,
    phoneNumber: String,
    emailAddress: String,
    employmentstatus: String,
    occupation: String,
    educationLevel: String,
    heartRate: Number,
    bloodpressure: Number,
    respiratoryRate: Number,
    bodybTemperature:Number,
    oxygenSaturation: Number,
    weight: Number,
    height: Number,
    ecg: String,
    bloodglucose: Number,
    urineOutput: Number,
    testDate: String,
    createdAt: {
        type: Date,
        default : Date.now(),
    },
});
 



export const Scheduled_List = mongoose.model("Scheduled_List" , schema );
