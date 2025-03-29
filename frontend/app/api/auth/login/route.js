import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDBfront } from "@/app/lib/mongoDB";
import User from "../../../../../backend/models/user/user";

export async function POST(req) {
  try {
    await connectDBfront();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user || !(await compare(password, user.password))) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const userId = user._id;
    await User.updateOne({ _id: userId }, { $set: { token: token } });

    return Response.json({ token, userId: user._id }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Login failed" }, { status: 500 });
  }
}
