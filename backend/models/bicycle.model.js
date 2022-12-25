module.exports = (sequelize, Sequelize) => {
  const Bicycle = sequelize.define("bicycle", {
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    }
  }, {
    // dont use createdAt/update
    timestamps: false,
  });

  return Bicycle;
}