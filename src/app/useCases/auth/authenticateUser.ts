import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

import { User } from "../../models/User";

export async function authenticateUser(request: Request, response: Response) {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ email });

    if (!user) {
      return response
        .status(404)
        .json({ message: "Email or password invalid" });
    }

    user.comparePasswords(password, (err, isMatch) => {
      if (err) {
        throw new Error();
      }

      if (!isMatch) {
        return response
          .status(404)
          .json({ message: "Email or password invalid" });
      }
    });

    const token = sign({}, "0d424cef9e3abb2190e18d86c441f2f4", {
      subject: user.id,
      expiresIn: "7d",
    });

    const tokenReturn = {
      token,
      user: {
        name: user.name,
        email: user.email,
        id: user.id,
      },
    };

    return response.json(tokenReturn);
  } catch (error) {
    console.log(error);
    response.status(500);
  }
}
