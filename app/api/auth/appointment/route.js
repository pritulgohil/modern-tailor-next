import connectToDatabase from "@/lib/mongodb";
import Appointment from "@/models/Appointments";

export async function POST(req) {
  try {
    const { service, date, time, name, email, phone, userId } =
      await req.json();

    // Ensure all required fields are provided
    if (!service || !date || !time || !name || !email || !phone || !userId) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Create a new appointment
    const appointment = new Appointment({
      service,
      date,
      time,
      name,
      email,
      phone,
      userId,
    });

    // Save the appointment to the database
    await appointment.save();

    // Return success response
    return new Response(
      JSON.stringify({ message: "Appointment created successfully" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
