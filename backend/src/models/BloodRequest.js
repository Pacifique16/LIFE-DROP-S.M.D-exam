const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BloodRequest = sequelize.define('BloodRequest', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    hospitalId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'Hospitals', key: 'id' }
    },
    bloodType: {
      type: DataTypes.ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
      allowNull: false
    },
    unitsNeeded: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1 }
    },
    urgencyLevel: {
      type: DataTypes.ENUM('low', 'medium', 'high', 'emergency'),
      defaultValue: 'medium'
    },
    patientInfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    requiredBy: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('active', 'fulfilled', 'cancelled', 'expired'),
      defaultValue: 'active'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  return BloodRequest;
};