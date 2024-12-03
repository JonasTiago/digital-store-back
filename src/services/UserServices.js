import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const findAllUsers = async () => {
  const list = await UserModel.findAll();
  return list;
};

export const findUserById = async (id) => {
  const user = await UserModel.findByPk(id);
  if (!user) {
    throw { message: "User not found", code: 404 };
  }
  return user;
};

export const createUser = async (data) => {
  const user = await UserModel.create(data);
  return user;
};

export const updateUser = async (id, data) => {
  const user = await UserModel.findByPk(id);
  if (!user) {
    throw { message: "User not found", code: 404 };
  }
  await user.update(data);
  return user;
};

export const deleteUser = async (id) => {
  const user = await UserModel.findByPk(id);

  if (!user) {
    throw { message: "User not found", code: 404 };
  }
  await user.destroy();
};

export const authUserToken = async (email, password) => {
  const user = await UserModel.findOne({
    where: { email },
  });

  if (!user) {
    throw { message: "User not found" };
  }

  if (user.password !== password) {
    throw { message: "Unauthorized" };
  }

  const dados = {
    nome: user.firstName,
    email: user.email,
  };

  const chaveSecreta = process.env.JWT_SECRET;

  const token = jwt.sign(dados, chaveSecreta);

  return {
    token,
  };
};
