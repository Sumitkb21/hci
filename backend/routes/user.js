import express from "express" ;
import { getAllParticipants, participantSignup} from "../controllers/participants.js";
import { crcLogin, crcRegister } from "../controllers/crc.js";
import { addScheduledList, getScheduledList } from "../controllers/scheduled.js";
const router = express.Router();



//user routes
router.post("/participant/signup", participantSignup);
router.post("/crc/register", crcRegister);
router.post("/crc/login", crcLogin);
router.get("/getAllParticipants", getAllParticipants);
router.get("/getScheduled_List", getScheduledList);
router.post("/addScheduled_List", addScheduledList);



export default router;