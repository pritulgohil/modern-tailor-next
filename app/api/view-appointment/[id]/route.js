import connectToDatabase from "@/lib/mongodb";
import Appointment from "@/models/Appointments";
import { ObjectId } from "mongodb";

export async function GET(req, context) {
  try {
    const { id } = await context.params; // Await the params object

    // Validate and convert the ID to a MongoDB ObjectId
    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ message: "Invalid ID format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Connect to the database
    await connectToDatabase();

    // Find the appointment by ID
    const appointment = await Appointment.findById(new ObjectId(id));

    // Check if the appointment exists
    if (!appointment) {
      return new Response(
        JSON.stringify({ message: "Appointment not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Return the found appointment
    return new Response(JSON.stringify({ appointment }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
