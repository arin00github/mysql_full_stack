'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class svgmap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  svgmap.init({
    name: DataTypes.STRING,
    geojson: {
      type: Sequelize.TEXT('long'),
      get: function (){
        return JSON.parse(this.getDataValue('value'));
      },
      set: function(value){
        this.setDataValue('value', JSON.stringify(value))
      }
    }
  }, {
    sequelize,
    modelName: 'svgmap',
  });
  return svgmap;
};