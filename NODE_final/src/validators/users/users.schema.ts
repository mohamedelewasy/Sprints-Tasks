import z from 'zod';

export const registertionSchema = z
  .object({
    email: z
      .string({ required_error: 'email is required', invalid_type_error: 'invalid email format' })
      .email('invalid email format'),
    password: z
      .string({
        required_error: 'password is required',
        invalid_type_error: 'invalid password format',
      })
      .regex(
        /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/,
        'must be 8 characters with at least 1 capital and 1 small and 1 special character'
      ),
    passwordRepeat: z.string({
      required_error: 'passwordRepeat is required',
      invalid_type_error: 'invalid passwordRepeat password format',
    }),
  })
  .refine(
    schema => schema.password === schema.passwordRepeat,
    'password is not equal passwordRepeat'
  );

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'email is required', invalid_type_error: 'invalid email format' })
    .email('invalid email format'),
  password: z
    .string({
      required_error: 'password is required',
      invalid_type_error: 'invalid password format',
    })
    .min(8, 'name must be at least 8 characters'),
});
