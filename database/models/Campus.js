/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageurl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.pngitem.com/pimgs/m/3-32805_building-school-escuela-computer-icons-school-building-silhouette.png'
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  }
});

// Export the campus model
module.exports = Campus;