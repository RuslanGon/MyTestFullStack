import { loginUser, logoutUser, registerUser } from "../services/auth.js";


export const registerUserController = async (req, res, next) => {
    try {
      const user = await registerUser(req.body);
      res.status(201).json({
        status: 201,
        message: "User created",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  export const loginUserController = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const { user, accessToken, refreshToken } = await loginUser({ email, password });

      // Отправляем refreshToken в cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None", // для кросс-домена
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      // Возвращаем accessToken и данные пользователя
      res.status(200).json({
        status: 200,
        message: "Login successful",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  export const logoutController = async (req, res, next) => {
    try {
      await logoutUser({
        sessionId: req.cookies.sessionId,
        sessionToken: req.cookies.sessionToken,
      });

      // Кросс-доменные cookie: sameSite=None и secure=true для HTTPS
      res.clearCookie("sessionId", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
      });

      res.clearCookie("sessionToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
      });

      res.status(200).json({
        status: 200,
        message: "User logged out",
        data: {},
      });
    } catch (error) {
      next(error);
    }
  };
