import { z } from "zod";

const createCitySchema = z.object({
  name: z
    .string({
      required_error: "City is required",
    })
    .min(3, { message: "City  must be at least 3 characters long" })
    .max(20, { message: "City must be at most 20 characters long" }),
});

export default {
  createCitySchema,
};
