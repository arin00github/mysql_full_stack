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
        foreignKey:'users_id',
        sourceKey: 'id',
        onUpdate: 'cascade'
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
    email: DataTypes.STRING,
    active: DataTypes.STRING,
    role: {
      type : DataTypes.ENUM,
      values : ['user', 'partner', 'manager']
    }
  }, {
    sequelize,
    modelName: 'users',
    timestamps: true,
    tableName: 'users', //기본저긏로 모델이름은 소문자 및 복수형으로 만듬. 모델이 User이면 users가 됨
    paranoid: false, // true하면 deleteAt 컬럼이 생긴다. 삭제시 완전히 지워지지 않고 deleteAt에 지운 시각이 기록된다.
    charset:'utf8mb4'
  });
  return users;
};