import jwt from "jsonwebtoken";
import "dotenv/config";

export const validToken = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  try {
    if (!token) {
      throw { message: "Unauthorized" };
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw { message: "Unauthorized" };
      }
      req.userId = decoded.id;
    });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
