module.exports = (sequelize, DataTypes) => {
  return sequelize.define('image', {
    url: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
};