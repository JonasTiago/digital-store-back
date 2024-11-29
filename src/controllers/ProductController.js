import {
  createProduct,
  findAllProducts,
  findByIdProduct,
} from "../services/ProductService.js";

export const findAllSearch = async (req, res) => {
  try {
    const { limit, page, fields, match, category_ids, price_range, option } =
      req.query;
    const list = await findAllProducts({
      limit,
      page,
      fields,
      match,
      category_ids,
      price_range,
      option,
    });
    return res.status(200).json(list);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const findById = async (req, res) => {
  try {
    const product = await findByIdProduct(req.params.id);
    return res.status(200).json(product);
  } catch (error) {
    if (error.message === "Product not found") {
      return res.status(404).json({ message: error.message });
    }
    return res.status(400).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
