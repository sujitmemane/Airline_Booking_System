import { z } from "zod";

const createAirplaneSchema = z.object({
  modelNumber: z
    .string({
      required_error: "Model Number is required",
    })
    .min(3, { message: "Model number must be at least 3 characters long" })
    .max(10, { message: "Model number must be at most 10 characters long" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Only alphanumeric characters are allowed",
    }),
  capacity: z
    .number({
      required_error: "Capacity is required",
    })
    .int({ message: "Capacity must be an integer" })
    .max(1000, { message: "Capacity must be less than or equal to 1000" }),
});

export default {
  createAirplaneSchema,
};
