import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      this.hasMany(models.Flights, {
        foreignKey: "airplaneId",
        onDelete: "CASCADE",
      });
    }
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
