import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";
import connectToDatabase from "@/lib/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await connectToDatabase();
    const db = client.db("test");
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found!" }), {
        status: 404,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        firstname: user.firstname,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return new Response(JSON.stringify({ token, userId: user._id }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
