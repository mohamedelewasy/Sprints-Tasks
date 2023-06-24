import z from 'zod';

export const createSchema = z.object({
  name: z
    .string({ required_error: 'name is required', invalid_type_error: 'invalid name format' })
    .min(3, 'name must be at least 3 characters'),
  price: z
    .number({
      required_error: 'price is required',
      invalid_type_error: 'invalid price format',
    })
    .min(1, 'price must be positive'),
  category_id: z.number({
    required_error: 'category_id is required',
    invalid_type_error: 'invalid category_id format',
  }),
});

export const updateSchema = z.object({
  name: z
    .string({ required_error: 'name is required', invalid_type_error: 'invalid name format' })
    .min(3, 'name must be at least 3 characters'),
  price: z
    .number({
      required_error: 'price is required',
      invalid_type_error: 'invalid price format',
    })
    .min(1, 'price must be positive'),
  category_id: z.number({
    required_error: 'category_id is required',
    invalid_type_error: 'invalid category_id format',
  }),
});

export const paramIdSchema = z.object({
  id: z.coerce.number({
    required_error: 'id is required',
    invalid_type_error: 'invalid id format',
  }),
});
