import { Router } from "express";
import { saveAppointment, getAppointmentByOwner, updateAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/listAppointments/user/:userId", getAppointmentByOwner);
router.put("/updateAppointment/:id", updateAppointmentValidator, updateAppointment);

export default router;