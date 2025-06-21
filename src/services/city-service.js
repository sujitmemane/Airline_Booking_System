import { StatusCodes } from "http-status-codes";
import { CityRepository } from "../reposotries/index.js";
import AppError from "../utils/errors/app-error.js";

const cityRepository = new CityRepository();

async function createCity(data) {
  console.log("data", data);
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    console.log(error?.name);
    if (error.name === "SequelizeValidationError") {
      const explanation = error.errors.map(
        (err) => err.path + "" + err.message
      );
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    if (error.name === "SequelizeUniqueConstraintError") {
      const explanation = error.errors.map((err) => err.message);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot create new City object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

export default {
  createCity,
};
