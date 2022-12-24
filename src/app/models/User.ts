import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "WAITER"],
    required: true,
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePasswords = function (
  candidatePasword: string,
  next: (err: Error | null, same: boolean | null) => void
) {
  bcrypt.compare(candidatePasword, this.password, function (err, isMatch) {
    if (err) return next(err, null);

    next(null, isMatch);
  });
};

export const User = model("User", userSchema);

export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  role: string;
  comparePasswords(
    candidatePassword: string,
    next: (err: Error | null, same: boolean | null) => void
  ): boolean;
}
