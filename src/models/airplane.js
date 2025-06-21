import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {}
  }

  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
        },
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: 100,
        },
      },
    },
    {
      sequelize,
      modelName: "Airplane",
    }
  );

  return Airplane;
};
