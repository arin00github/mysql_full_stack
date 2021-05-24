'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bootcamp_lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.reviews, {
        foreignKey: 'bootcamp_id', //review의 bootcamp_id
        sourceKey: 'id',
        onUpdate:'cascade',
        onDelete:'set null'
      })
      this.belongsToMany(models.users, {
        through: 'users_bootcamp',
        targetKey: 'id',
        foreignKey: 'bootcamp_id', //자기 필드 값에서 가져옴
        onUpdate:'cascade',
        onDelete:'cascade'

      })
    }
  };
  bootcamp_lists.init({
    title: DataTypes.STRING,
    personCount: DataTypes.INTEGER,
    price : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bootcamp_lists',
  });
  return bootcamp_lists;
};