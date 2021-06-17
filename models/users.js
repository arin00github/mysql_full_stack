'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.reviews, {
        foreignKey: 'users_id',
        sourceKey: 'id',
        onUpdate: 'cascade',
        onDelete:'set null'
      })

      this.belongsToMany(models.bootcamp_lists, {
        through: 'users_bootcamp',
        targetKey: 'id',
        foreignKey: 'users_id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      })
    
    }
  };
  users.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: ['manager', 'user', 'partner']
    }
  }, {
    sequelize,
    modelName: 'users',
    timestamps: true,
    charset: 'utf8'
  });
  return users;
};