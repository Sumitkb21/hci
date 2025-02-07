import { Participant } from "../models/participant.js";


// export const updateParticipant = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateData = req.body;

//     let user = await Participant.findById(_id);

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "Participant not found"
//       });
//     }

//     user = await Participant.findByIdAndUpdate(id, updateData, { new: true });

//     return res.status(200).json({
//       success: true,
//       message: "Participant updated successfully",
//       user
//     });
//   } catch (error) {
//     res.status(400).json({
//       error,
//       success: false,
//       message: "Error: Not able to update",
//     });
//   }
// };


export const participantSignup = async(req,res) =>{
    try {
      const {
        fullName,
        dob,
        gender,
        maritalStatus,
        address,
        phoneNumber,
        emailAddress,
        employmentstatus,
        occupation,
        educationLevel,
        heartRate,
        bloodpressure,
        respiratoryRate,
        bodybTemperature,
        oxygenSaturation,
        weight,
        height,
        ecg,
        bloodglucose,
        urineOutput
      } = req.body;
      
      console.log("me aa gaya");
        let user = await Participant.findOne({phoneNumber});

        // let admin = await Admin.findOne({email});

        if(user){
            return res.status(400).json({
                success : false,
                message: "Participants already exist"
            })
        }
        

        // const hashedpassword = await bcrypt.hash(password, 10);


        user = await Participant.create({
          fullName,
          dob,
          gender,
          maritalStatus,
          address,
          phoneNumber,
          emailAddress,
          employmentstatus,
          occupation,
          educationLevel,
          heartRate,
          bloodpressure,
          respiratoryRate,
          bodybTemperature,
          oxygenSaturation,
          weight,
          height,
          ecg,
          bloodglucose,
          urineOutput
        })

        return  res.status(200).json({
          success: true,
          message: "You enrolled succesfully"
        })
            
    }
    catch (error) {
        res.status(400).json({
            error,
            success: false,
            message: "Error: Not able to create",
        })
    }
        
}


export const getAllParticipants = async(req,res) =>{
  try {
      let user = await Participant.find();
      return  res.status(200).json({
        success: true,
        message: "get list succesfully",
        user
      
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





