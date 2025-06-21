import CrudRepositoty from "./crud-repository.js";
import City from "../models/city.js";
import db from "../models/index.js";

class CityRepository extends CrudRepositoty {
  constructor() {
    super(db.City);
  }
}

export default CityRepository;
