import express from "express";
import axios from "axios";

const app = express();

interface Iproduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Icategory;
}

interface Icategory {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
  products: Iproduct[];
}

const getCurrency = async () => {
  const response = await axios.get(
    "https://openexchangerates.org/api/latest.json?app_id=4fb54a06490f4d09a8bf0049e7b9d7eb"
  );
  const egp = response.data.rates.EGP;
  return egp;
};

const getProducts = async (): Promise<Icategory[]> => {
  const productsRequest = await axios.get(
    "https://api.escuelajs.co/api/v1/products/"
  );
  const categoriesRequest = await axios.get(
    "https://api.escuelajs.co/api/v1/categories/"
  );

  const egp = await getCurrency();

  const products = <Iproduct[]>productsRequest.data;
  const categories = <Icategory[]>categoriesRequest.data;
  const categoriesMap = new Map<number, number>();

  categories.forEach((category, i) => categoriesMap.set(category.id, i));

  products.forEach((product) => {
    const categoryIndex = categoriesMap.get(product.category.id) as number;
    if (categories[categoryIndex].products === undefined)
      categories[categoryIndex].products = [];
    product.price = parseFloat((product.price / egp).toFixed(3));
    categories[categoryIndex].products.push(product);
  });

  return categories;
};

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const data = await getProducts();
  res.render("index.ejs", { data });
});

app.get("/json", async (req, res) => {
  const data = await getProducts();
  res.status(200).json(data);
});

app.listen(3000, () =>
  console.log("press to view result: http://localhost:3000/")
);
