import { hash } from "bcryptjs";
import { connectDBfront } from "@/app/lib/mongoDB";
import User from "../../../../../backend/models/user/user";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req) {
  try {
    await connectDBfront();
    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return Response.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Registration failed" }, { status: 500 });
  }
}
