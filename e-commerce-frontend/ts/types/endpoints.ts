interface IendpointConfig {
  url: string;
  method: "get" | "post" | "put" | "delete";
}

export enum EndpointsIndexes {
  registerUser = "registerUser",
  loginUser = "loginUser",
  createCategory = "createCategory",
  getCategories = "getCategories",
  getCategory = "getCategory",
  updateCategory = "updateCategory",
  deleteCategory = "deleteCategory",
  createProduct = "createProduct",
  getProducts = "getProducts",
  getFeaturedProducts = "getFeaturedProducts",
  getRecentProducts = "getRecentProducts",
  getProductCategory = "getProductCategory",
  getProduct = "getProduct",
  updateProduct = "updateProduct",
  deleteProduct = "deleteProduct",
  createOrder = "createOrder",
  getOrders = "getOrders",
}

export const endpoints: { [key in EndpointsIndexes]: IendpointConfig } = {
  registerUser: { url: "/api/users/register", method: "post" },
  loginUser: { url: "/api/users/login", method: "post" },
  createCategory: { url: "/api/categories", method: "post" },
  getCategories: { url: "/api/categories", method: "get" },
  getCategory: { url: "/api/categories/:id", method: "get" },
  updateCategory: { url: "/api/categories/:id", method: "put" },
  deleteCategory: { url: "/api/categories/:id", method: "delete" },
  createProduct: { url: "/api/products/", method: "post" },
  getProducts: { url: "/api/products/", method: "get" },
  getFeaturedProducts: { url: "/api/products/getFeatured", method: "get" },
  getRecentProducts: { url: "/api/products/getRecent", method: "get" },
  getProductCategory: {
    url: "/api/products/getByCategoryId/:id",
    method: "get",
  },
  getProduct: { url: "/api/products/:id", method: "get" },
  updateProduct: { url: "/api/products/:id", method: "put" },
  deleteProduct: { url: "/api/products/:id", method: "delete" },
  createOrder: { url: "/api/orders", method: "post" },
  getOrders: { url: "/api/orders", method: "get" },
};
