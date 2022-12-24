import { Request, Response } from "express";
import { User } from "../../models/User";

export async function registerUser(request: Request, response: Response) {
  try {
    const { name, email, password, role } = request.body;

    if (!name || !email || !password || !role) {
      return response.status(400).json({ message: "All fields are required" });
    }

    const emailAlreadyInUse = await User.findOne({ email });

    if (emailAlreadyInUse) {
      return response.status(400).json({ message: "Email already in use" });
    }

    const user = await User.create({ name, email, password, role });

    return response.status(201).json(user);
  } catch (error) {
    console.log(error);
    response.status(500);
  }
}
