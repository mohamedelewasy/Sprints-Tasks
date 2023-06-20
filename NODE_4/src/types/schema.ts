import { z } from "zod";

export interface Iproduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

export const createProductSchema = z.object({
  title: z.string({
    required_error: "title is required",
    invalid_type_error: "invalid title format",
  }),
  price: z.number({
    required_error: "price is required",
    invalid_type_error: "invalid price format",
  }),
  description: z.string({
    required_error: "description is required",
    invalid_type_error: "invalid description format",
  }),
  categoryId: z.number({
    required_error: "categoryId is required",
    invalid_type_error: "invalid categoryId format",
  }),
  images: z.array(
    z
      .string({
        required_error: "images is requires",
        invalid_type_error: "invalid image format",
      })
      .url({ message: "image must be a url" }),
    { required_error: "at least one image is required" }
  ),
});

export const updateProductSchema = z.object({
  title: z.string({
    required_error: "title is required",
    invalid_type_error: "invalid title format",
  }),
  price: z.number({
    required_error: "price is required",
    invalid_type_error: "invalid price format",
  }),
  description: z.string({
    required_error: "description is required",
    invalid_type_error: "invalid description format",
  }),
  categoryId: z.number({
    required_error: "categoryId is required",
    invalid_type_error: "invalid categoryId format",
  }),
  images: z.array(
    z
      .string({
        required_error: "images is requires",
        invalid_type_error: "invalid image format",
      })
      .url({ message: "image must be a url" }),
    { required_error: "at least one image is required" }
  ),
});
