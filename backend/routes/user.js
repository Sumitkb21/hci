import express from "express" ;
import { getAllParticipants, participantSignup, updateParticipant} from "../controllers/participants.js";
import { crcLogin, crcRegister } from "../controllers/crc.js";
import { addScheduledList, getScheduledList, removeParticipant } from "../controllers/scheduled.js";
import { piLogin, piRegister } from "../controllers/pi.js";
const router = express.Router();



//user routes
router.post("/participant/signup", participantSignup);
router.post("/crc/register", crcRegister);
router.post("/crc/login", crcLogin);
router.get("/getAllParticipants", getAllParticipants);
router.get("/getScheduled_List", getScheduledList);
router.post("/addScheduled_List", addScheduledList);
router.post("/updateinfo/:id" , updateParticipant);
router.delete("/removeParticipant/:id" , removeParticipant)
router.post("/pi/login", piLogin);
router.post("/pi/register", piRegister);

export default router;