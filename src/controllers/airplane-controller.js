import { StatusCodes } from "http-status-codes";
import { AirplaneService } from "../services/index.js";
import { ErrorResponse, SuccessResponse } from "../utils/common/index.js";

async function createAirplane(req, res) {
  console.log(req.body);
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    SuccessResponse.data = airplane;
    SuccessResponse.message = "Airplane created successfully";
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    SuccessResponse.message = "All Airplanes fetched";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplane(req, res) {
  const { id } = req.params;
  if (!id) {
    ErrorResponse.error = "Airplane Id not found";
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  try {
    const airplane = await AirplaneService.getAirplane(id);
    SuccessResponse.data = airplane;
    SuccessResponse.message = "Airplane fetched";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function destroyAirplane(req, res) {
  const { id } = req.params;
  if (!id) {
    ErrorResponse.message = "Airplane Id is not found";
    return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse);
  }
  try {
    const airplane = await AirplaneService.destroyAirplane(id);
    SuccessResponse.data = airplane;
    SuccessResponse.message = "Airplane destroyed";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

export default { createAirplane, getAirplanes, getAirplane, destroyAirplane };
