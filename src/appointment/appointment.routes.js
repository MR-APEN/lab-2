import { Router } from "express";
import { saveAppointment, getAppointmentByOwner } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/listAppointments/user/:userId", getAppointmentByOwner);

export default router;