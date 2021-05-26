'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favoritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favoritos.belongsTo(models.User)
    }
  };
  Favoritos.init({
    numberId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imagem: DataTypes.STRING,
    descricao: DataTypes.STRING,
    extensao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Favoritos',
  });
  return Favoritos;
};