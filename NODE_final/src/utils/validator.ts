import z from 'zod';

export const checkValidatorErrors = <Data>(
  validator: z.SafeParseReturnType<unknown, unknown>
): [boolean, { errors: string[] }] | [boolean, Data] => {
  if (validator.success === false)
    return [false, { errors: validator.error.errors.map(err => err.message) }];
  return [true, validator.data as Data];
};
