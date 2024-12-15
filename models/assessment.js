// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Assessment extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Assessment.init({
//     title: DataTypes.STRING,
//     status: DataTypes.STRING,
//     score: DataTypes.INTEGER,
//     date_assigned: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'Assessment',
//   });
//   return Assessment;
// };


'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assessment extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  Assessment.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Not Started',
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      date_assigned: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Assessment',
    }
  );
  return Assessment;
};
