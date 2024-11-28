import CategoryModel from "../models/CategoryModel.js";

export const findAllCategories = async ({
  limit = 12,
  page = 1,
  fields,
  use_in_menu,
}) => {
  const offset = (page - 1) * limit;
  const list = await CategoryModel.findAndCountAll({
    limit,
    offset,
    attributes: fields ? fields.split(",") : null,
    where: use_in_menu ? { use_in_menu: true } : null,
  });
  return {
    data: list.rows,
    meta: {
      total: list.count,
      limit,
      page,
    },
  };
};

export const createCategory = async (data) => {
  const category = await CategoryModel.create(data);
  return category;
};

export const findCategoryById = async (id) => {
  const category = await CategoryModel.findByPk(id);
  if (!category) {
    throw new Error("Category not found");
  }
  return category;
};

export const updateCategory = async (id, data) => {
  const category = await CategoryModel.findByPk(id);
  if (!category) {
    throw new Error("Category not found");
  }
  category.update(data);
  return category;
};

export const removeCategory = async (id) => {
  const category = await CategoryModel.findByPk(id);
  if (!category) {
    throw new Error("Category not found");
  }
  category.destroy();
};
