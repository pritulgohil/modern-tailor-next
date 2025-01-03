import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    service: { type: String, required: true }, // Service selected for the appointment
    date: { type: String, required: true }, // Date of the appointment as a string
    time: { type: String, required: true }, // Time of the appointment as a string
    name: { type: String, required: true }, // Name of the person booking the appointment
    email: { type: String, required: true }, // Email of the person booking the appointment
    phone: { type: String, required: true }, // Phone number of the person booking the appointment
    userId: { type: String, required: true }, // ID of the signed-in user
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt timestamps
);

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
