import { User } from "../db/models/user.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const { email, password } = payload;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw createHttpError(409, "Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    ...payload,
    password: hashedPassword,
  });

  return user;
};
