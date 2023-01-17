import { Request, Response } from "express";
import { User } from "../../models/User";

export async function updateUser(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const { name, email, password, role } = request.body;

    const userExists = await User.findById(id);

    if (!userExists) {
      return response.status(400).json({ message: "User not found" });
    }

    await User.findByIdAndUpdate(id, {
      name,
      email,
      password,
      role,
    });

    return response.sendStatus(204);
  } catch (error) {
    console.log(error);
    response.status(500);
  }
}
