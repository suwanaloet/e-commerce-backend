const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    //id
    id: {
      //Integer
      type: DataTypes.INTEGER,
      //doesnt allow null values
      allowNull: false,
      //set as primary key
      primaryKey: true,
      //uses auto increment
      autoIncrement: true,
    },
    //product_id
    product_id: {
      //integer
      type: DataTypes.INTEGER,
      //references 'product' model's 'id'
      references: {
        //product model
        model: 'product',
        //id key
        key: 'id',
      },
    },
    //tag_id
    tag_id: {
      //integer
      type: DataTypes.INTEGER,
      //refernces 'tag' model's 'id'
      references: {
        // tag model
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
