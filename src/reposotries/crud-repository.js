import { StatusCodes } from "http-status-codes";
import { Logger } from "../config/index.js";
import AppError from "../utils/errors/app-error.js";
class CrudRepositoty {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    const response = await this.model.create(data);

    return response;
  }
  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      if (!response) {
        throw new AppError("Resourse not found", StatusCodes.NOT_FOUND);
      }
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud repo: Destroy");
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      if (!response) {
        throw new AppError("Resourse not found", StatusCodes.NOT_FOUND);
      }
      return response;
    } catch (error) {
      console.log(error);
      Logger.error("Something went wrong in the Crud repo:GET");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud repo:GET");
      return error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud repo:GET");
      return error;
    }
  }
}

export default CrudRepositoty;
