import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { ErrorResponse } from "../utils/common/index.js";

function validateIncomeRequest(Schema) {
  return (req, res, next) => {
    try {
      Schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formatted = error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        ErrorResponse.message = "Validation failed";
        ErrorResponse.error = formatted;

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
      }

      ErrorResponse.message = "Unexpected error";
      ErrorResponse.error = error;

      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
  };
}

export default validateIncomeRequest;
