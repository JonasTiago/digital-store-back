import {
  findAllUsers,
  findUserById,
  createUser,
} from "../services/UserServices.js";

export const findAll = async (req, res) => {
  try {
    const list = await findAllUsers();
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user = await findUserById(user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const data = req.body;
    const user = await createUser(data);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
