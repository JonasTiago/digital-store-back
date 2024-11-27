import UserModel from "../models/UserModel.js";

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
