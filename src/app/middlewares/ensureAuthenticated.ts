import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../models/User";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "Not authenticated" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "0d424cef9e3abb2190e18d86c441f2f4"
    ) as IPayload;

    const user = await User.findById(user_id);

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    return response.status(500);
  }
}
