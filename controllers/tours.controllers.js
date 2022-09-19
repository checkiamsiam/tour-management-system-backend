const Tour = require("../models/tour.model");

module.exports.getTourController = async (req, res, next) => {
  try {
    const result =  await Tour.find({})
    res.send(result)
  } catch (error) {
    next(error);
  }
};
module.exports.postTourController = async (req, res, next) => {
  try {
    const tour = new Tour(req.body);
    tour.availableVacancy = 55
    const result = await tour.save();
    res.send(result)
  } catch (error) {
    next(error);
  }
};
