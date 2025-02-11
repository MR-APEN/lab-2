import { Router } from "express";
import { saveAppointment, getAppointmentByOwner, updateAppointment, deleteAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator, deleteAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/listAppointments/user/:userId", getAppointmentByOwner);
router.put("/updateAppointment/:id", updateAppointmentValidator, updateAppointment);
router.delete("/deleteAppointment/:id", deleteAppointmentValidator, deleteAppointment);

export default router;