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

  if (page < 1) {
    page = null;
  } else {
    page = (page - 1) * limit;
  }

  if (limit < 1) {
    limit = null;
  }

  const products = await ProductModel.findAndCountAll({
    where: query,
    limit,
    offset: page,
    attributes: fields,
    include: [
      {
        model: ImageProductModel,
        as: "images",
      },
      // {
      //   model: ProductOptionModel,
      //   as: "options",
      // },
    ],
  });

  return {
    data: products.rows,
    meta: {
      total: products.count,
      limit: limit ? limit : "all",
      page: page ? page : undefined,
    },
  };
};

export const findByIdProduct = async (id) => {
  const product = await ProductModel.findOne({
    where: {
      id,
    },
    include: [
      {
        model: ImageProductModel,
        as: "images",
      },
      // {
      //   model: ProductOptionModel,
      //   as: "options",
      // },
    ],
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

export const createProduct = async (product) => {
  const upProduct = await ProductModel.create(product);

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

export const updateProduct = async (id, data) => {
  const product = await ProductModel.findByPk(id);

  if (!product) {
    throw new Error("Product not found");
  }

  const upProduct = await product.update(data);

  // const imagesToInsert = data.images.map((image) => ({
  //   ...image,
  //   path: image.content,
  //   product_id: upProduct.id,
  // }));

  // const optionToInsert = data.options.map((option) => ({
  //   ...option,
  //   product_id: upProduct.id,
  // }));

  // await ImageProductModel.bulkCreate(imagesToInsert);
  // const images = await ImageProductModel.findAll({
  //   where: {
  //     product_id: upProduct.id,
  //   },
  // });

  // await ProductOptionModel.bulkCreate(optionToInsert);
  // const options = await ProductOptionModel.findAll({
  //   where: {
  //     product_id: upProduct.id,
  //   },
  // });

  // const productWithImages = await ProductModel.findOne({
  //   where: {
  //     id: upProduct.id,
  //   },
  //   include: [
  //     {
  //       model: ImageProductModel,
  //       as: "images",
  //     },
  //   ],
  // });
};

export const removeProduct = async (id) => {
  const product = await ProductModel.findByPk(id);

  if (!product) {
    throw new Error("Product not found");
  }

  await product.destroy();
};
