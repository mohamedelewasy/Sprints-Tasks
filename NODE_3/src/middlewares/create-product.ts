import http from "http";
import z, { SafeParseSuccess } from "zod";
import axios, { AxiosError } from "axios";
import { productsAPI } from "../app";

export const createProductMiddleware = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const chunks: unknown[] = [];
  req.on("data", (chunk) => {
    chunks.push(chunk);
  });

  req.on("end", async () => {
    const body = JSON.parse(chunks.toString());
    const productSchema = z.object({
      title: z.string({
        required_error: "title is requried",
        invalid_type_error: "invalid title format",
      }),
      price: z.coerce.number({
        required_error: "price is required",
        invalid_type_error: "invalid price format",
      }),
      description: z.string({
        required_error: "description is required",
        invalid_type_error: "invlaid description format",
      }),
      categoryId: z.coerce.number({ required_error: "categoryId is required" }),
      images: z
        .string({
          required_error: "image is required",
          invalid_type_error: "invalid image format",
        })
        .url({ message: "invalid url" })
        .array()
        .nonempty({ message: "image is required" }),
    });

    const validation = productSchema.safeParse(body);
    if (validation.success === false) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.write(JSON.stringify(validation.error.formErrors));
      res.end();
    }
    try {
      const newProduct = await axios.post(
        productsAPI,
        (validation as SafeParseSuccess<unknown>).data
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(newProduct.data));
      res.end();
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.write(JSON.stringify((error as AxiosError).response?.data));
      res.end();
    }
  });
};
