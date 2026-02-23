import { loginUser, registerUser } from "../services/auth.js";

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
      const { user, accessToken, refreshToken } = await loginUser(req.body);

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
          refreshToken,
        },
      });
    } catch (error) {
      next(error);
    }
  };
