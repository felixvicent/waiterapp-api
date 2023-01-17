import { Request, Response } from "express";
import { User } from "../../models/User";

export async function listUsers(request: Request, response: Response) {
  try {
    const users = await User.find().select("-password");

    return response.json(users);
  } catch (error) {
    console.log(error);
    response.status(500);
  }
}
