import { StatusCodes } from "http-status-codes";
import { CityService } from "../services/index.js";
import { ErrorResponse, SuccessResponse } from "../utils/common/index.js";

async function createCity(req, res) {
  console.log(req.body);
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });

    SuccessResponse.data = city;
    SuccessResponse.message = "City created successfully";
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

export default {
  createCity,
};
