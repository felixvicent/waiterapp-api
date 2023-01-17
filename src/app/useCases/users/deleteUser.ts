import { Request, Response } from "express";
import { User } from "../../models/User";

export async function deleteUser(request: Request, response: Response) {
  try {
    const { id } = request.params;

    await User.findByIdAndRemove(id);

    return response.sendStatus(204);
  } catch (error) {
    console.log(error);
    response.status(500);
  }
}
