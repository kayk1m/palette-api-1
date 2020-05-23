module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('null', 'male', 'female'),
      allowNull: false
    },
    num_fans: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    profile_pic_src: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    profile_msg: {
      type: DataTypes.STRING(64),
      allowNull: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
};