import { findAllCategories } from "../services/CategoryService.js";

export const findAllSearch = async (req, res) => {
  try {
    const { limit = 12, page = 1, fields, use_in_menu } = req.query;
    const list = await findAllCategories({ limit, page, fields, use_in_menu });
    return res.status(200).json(list);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
