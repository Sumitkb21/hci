import { Scheduled_List } from "../models/scheduledList.js";

export const getScheduledList = async(req,res) =>{
  try {
      let list = await Scheduled_List.find();
      return  res.status(200).json({
        success: true,
        message: "get list succesfully",
        list     
      })
          
  }
  catch (error) {
      res.status(400).json({
          error,
          success: false,
          message: "Error: Not able to get",
      })
  }
      
}

export const addScheduledList = async (req, res) => {
    try {
        const { participants, testDate } = req.body;
        console.log("yanah hu");
        const scheduledParticipants = participants.map((participant) => ({
            ...participant,  // Spread participant fields
            testDate,        // Add testDate field
        }));

        // Insert all participants at once for better performance
        const newDocuments = scheduledParticipants.map(participant => ({
            fullName: participant.fullName,
            dob: participant.dob,
            gender: participant.gender,
            maritalStatus: participant.maritalStatus,
            address: participant.address,
            phoneNumber: participant.phoneNumber,
            emailAddress: participant.emailAddress,
            employmentstatus: participant.employmentstatus,
            occupation: participant.occupation,
            educationLevel: participant.educationLevel,
            heartRate: participant.heartRate,
            bloodpressure: participant.bloodpressure,
            respiratoryRate: participant.respiratoryRate,
            bodybTemperature: participant.bodybTemperature,
            oxygenSaturation: participant.oxygenSaturation,
            weight: participant.weight,
            height: participant.height,
            ecg: participant.ecg,
            bloodglucose: participant.bloodglucose,
            urineOutput: participant.urineOutput,
            testDate: participant.testDate,
        }));
        await Scheduled_List.insertMany(newDocuments);

        res.status(201).json({
            success: true,
            message: "Participants added successfully",
        });
    } catch (error) {
        console.error("Error adding scheduled participants:", error);
        res.status(400).json({
            success: false,
            message: "Error: Not able to add participants",
            error,
        });
    }
};



export const removeParticipant = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Check if participant exists
      const participant = await Scheduled_List.findById(id);
      if (!participant) {
        return res.status(404).json({
          success: false,
          message: "Participant not found",
        });
      }
  
      // Delete participant
      await Scheduled_List.findByIdAndDelete(id);
  
      return res.status(200).json({
        success: true,
        message: "Participant removed successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error: Unable to remove participant",
        error: error.message,
      });
    }
  };

  
  