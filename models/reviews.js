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
      // define association here
      reviews.belongsTo(models.users, { foreignKey: 'users_id',targetKey:'id',onUpdate: 'cascade', onDelete: 'set null'})

      reviews.belongsTo(models.bootcamp_lists, {
        foreignKey: 'bootcamp_id',
        targetKey: 'id',
        onUpdate: 'cascade',
        onDelete: 'set null'
      })

    }
  };
  reviews.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reviews',
    timestamps: true,
    charset: 'utf-8'
  });
  return reviews;
};