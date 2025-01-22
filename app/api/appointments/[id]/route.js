import { MongoClient } from "mongodb";
import connectToDatabase from "@/lib/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export async function GET(req, { params }) {
  try {
    const { id } = params; // Get the userId from params
    console.log("Received userId:", id); // Log the userId

    await connectToDatabase();
    const db = client.db("test");
    const appointmentsCollection = db.collection("appointments");

    const appointments = await appointmentsCollection
      .find({ userId: id }) // Compare userId as a string
      .toArray();

    console.log("Appointments found:", appointments); // Log the results of the query

    // if (appointments.length === 0) {
    //   return new Response(
    //     JSON.stringify({ error: "No appointments found for this user" }),
    //     { status: 404 }
    //   );
    // }

    return new Response(JSON.stringify({ appointments }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
