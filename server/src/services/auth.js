import { User } from "../db/models/user.js";
import createHttpError from "http-errors";
import { env } from "../utils/env.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Session } from "../db/models/session.js";

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

export const loginUser = async ({ email, password }) => {
    // 1. Находим пользователя
    const user = await User.findOne({ email });
    if (!user) {
      throw createHttpError(401, "Email or password is wrong");
    }

    // 2. Проверяем пароль
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw createHttpError(401, "Email or password is wrong");
    }

    // 3. Генерируем JWT
    const accessToken = jwt.sign(
      { id: user._id, email: user.email },
      env("JWT_SECRET"),
      { expiresIn: "1h" } // токен живёт 1 час
    );

    const refreshToken = jwt.sign(
      { id: user._id, email: user.email },
      env("JWT_REFRESH_SECRET"),
      { expiresIn: "7d" } // токен живёт 7 дней
    );

    return {
      user,
      accessToken,
      refreshToken,
    };
  };

  export const logoutUser = async ({ sessionId, sessionToken }) => {
    return await Session.deleteOne({
      _id: sessionId,
      refreshToken: sessionToken,
    });
  };
