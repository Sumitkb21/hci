import { PI } from "../models/pi.js";


export const piRegister = async(req,res) =>{
    try {
      const {
        fullName,
        email,
        password
      } = req.body;
      
      console.log("me aa gaya");
        let user = await PI.findOne({email});
  
        // let admin = await Admin.findOne({email});
  
        if(user){
            return res.status(400).json({
                success : false,
                message: "This CRC already exist"
            })
        }
        
  
        user = await PI.create({
          fullName,
          email,
          password
        })
  
        return  res.status(200).json({
          success: true,
          message: "PI registered succesfully"
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

  export const piLogin = async(req,res) =>{
    try {
      const {
        email,
        password
      } = req.body;
      
    //   console.log("me aa gaya");
        let user = await PI.findOne({email});
  
        // let admin = await Admin.findOne({email});
  
        if(!user){
            return res.status(400).json({
                success : false,
                message: "This PI does not exist"
            })
        }

        if(user.password!=password){
            return res.status(400).json({
                success : false,
                message: "Wrong Password"
            })
        }
        
  
        // const hashedpassword = await bcrypt.hash(password, 10);
  
  
        
  
        return  res.status(200).json({
          success: true,
          message: "PI login succesfully",
          user
        })
            
    }
    catch (error) {
        res.status(400).json({
            error,
            success: false,
            message: "Error: Not able to login",
        })
    }
        
  }
  