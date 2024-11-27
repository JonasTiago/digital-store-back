import { findAllUsers, findUserById } from "../services/UserServices.js";

export const findAll = async (req, res) => {
  const list = await findAllUsers();
  res.status(201).json(list);
};

export const findOne = async (req, res) => {
  const user_id = req.params.id;
  const user = await findUserById(user_id);
  res.status(200).json(user);
};
