// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    //id
    id: {
      //integer
      type: DataTypes.INTEGER,
      //doesnt allow null values
      allowNull: false,
      //set as primary key
      primaryKey: true,
      //uses auto increment
      autoIncrement: true,
    },
    //product_name
    product_name: {
      //string
      type: DataTypes.STRING,
      //doesnt allow null values
      allowNull: false,
    },
    //price
    price: {
      //decimal
      type: DataTypes.DECIMAL,
      //doesnt allow null values
      allowNull: false,
      //validates value is in fact a decimal 
      validate: {
        isDecimal: true,
      },
    },
    //stock
    stock: {
      //integer
      type: DataTypes.INTEGER,
      //doesnt allow null values
      allowNull: false,
      //default value is 10
      defaultValue: 10,
      //validates that the value is numeric
      validate: {
        isNumeric: true,
      },
    },
    //category_id
    category_id: {
      //integer
      type: DataTypes.INTEGER,
      //references the 'category' model's 'id' -Need foreign key?
      references: {
        //category
        model: 'category',
        //id
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
