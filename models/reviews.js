'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(models)
      // define association here
      this.belongsTo(models.users, {
        foreignKey: 'users_id', //자기 모델에 있는 필드임
        as: 'users',
        targetKey:'id', //users의 id임
        onUpdate: 'cascade',
        onDelete: 'set null',
      })
      this.belongsTo(models.bootcamp_lists, {
        foreignKey: 'bootcamp_id',
        as: 'bootcamp_lists',
        targetKey: 'id', //users의 id임
        onUpdate: 'cascade',
        onDelete: 'set null',
      })
    }
  };
  reviews.init({
    users_id: DataTypes.INTEGER,
    bootcamp_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'reviews',
  });
  return reviews;
};