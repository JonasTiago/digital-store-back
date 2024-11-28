import {
  createCategory,
  findAllCategories,
} from "../services/CategoryService.js";

export const findAllSearch = async (req, res) => {
  try {
    const { limit = 12, page = 1, fields, use_in_menu } = req.query;
    const list = await findAllCategories({ limit, page, fields, use_in_menu });
    return res.status(200).json(list);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const category = await createCategory(req.body);
    return res.status(201).json(category);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
