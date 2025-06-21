import CrudRepositoty from "./crud-repository.js";
import Airplane from "../models/airplane.js";
import db from "../models/index.js";

class AirplaneRepository extends CrudRepositoty {
  constructor() {
    super(db.Airplane);
  }
}

export default AirplaneRepository;
