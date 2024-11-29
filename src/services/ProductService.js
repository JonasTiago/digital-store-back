import ProductModel from "../models/ProductModel.js";
import ImageProductModel from "../models/ImageProductModel.js";
import ProductOptionModel from "../models/ProductOptionModel.js";

export const findAllProducts = async ({
  limit = 12,
  page = 1,
  fields,
  match,
  category_ids,
  price_range,
  option,
}) => {
  const query = {
    ...match,
    ...category_ids,
    ...price_range,
    ...option,
  };
  const products = await ProductModel.findAndCountAll(query, fields);

  return {
    data: products.rows,
    meta: {
      total: products.count,
      limit,
      page,
    },
  };
};

export const createProduct = async (product) => {
  const newProduct = await ProductModel.create(product);

  const imagesToInsert = product.images.map((image) => ({
    ...image,
    path: image.content,
    product_id: newProduct.id,
  }));

  const optionToInsert = product.options.map((option) => ({
    ...option,
    product_id: newProduct.id,
  }));

  await ImageProductModel.bulkCreate(imagesToInsert);
  const images = await ImageProductModel.findAll({
    where: {
      product_id: newProduct.id,
    },
  });

  await ProductOptionModel.bulkCreate(optionToInsert);
  const options = await ProductOptionModel.findAll({
    where: {
      product_id: newProduct.id,
    },
  });

  const productWithImages = await ProductModel.findOne({
    where: {
      id: newProduct.id,
    },
    include: [
      {
        model: ImageProductModel,
        as: "images",
      },
    ],
  });

  return productWithImages;
};
