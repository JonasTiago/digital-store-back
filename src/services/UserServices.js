import UserModel from "../models/UserModel.js";

export const findAllUsers = async () => {
  const list = await UserModel.findAll();
  return list;
};

export const findUserById = async (id) => {
  const user = await UserModel.findByPk(id);
  return user;
};

export const createUser = async (data) => {
  const user = await UserModel.create(data);
  return user;
};
