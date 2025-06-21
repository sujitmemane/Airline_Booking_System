import { StatusCodes } from "http-status-codes";
import { AirplaneRepository } from "../reposotries/index.js";
import AppError from "../utils/errors/app-error.js";
import { error } from "console";

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const explanation = error.errors.map((err) => err.message);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot create new Airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Cannot  fetch the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    if (!airplane) {
      throw new AppError("Airplane not found", StatusCodes.BAD_REQUEST);
    }
    return airplane;
  } catch (error) {
    console.log(error.statusCode, "codeStatus");
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airplanes you requested not found",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw new AppError(
      "Cannot  fetch the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const airplanes = await airplaneRepository.destroy(id);
    return airplanes;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airplanes you requested to delete not found",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw new AppError(
      "Cannot  fetch the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
export default { createAirplane, getAirplanes, getAirplane, destroyAirplane };
