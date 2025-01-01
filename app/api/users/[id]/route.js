import { MongoClient, ObjectId } from "mongodb";
import connectToDatabase from "@/lib/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const db = client.db("test");
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ _id: new ObjectId(id) });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
    const { firstname } = user; // Extract only the required fields
    return new Response(JSON.stringify({ firstname }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
