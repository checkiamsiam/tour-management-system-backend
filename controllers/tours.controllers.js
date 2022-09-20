const Tour = require("../models/tour.model");
const { postTourService, getOneTourController } = require("../services/tours.services");

module.exports.getTourController = async (req, res, next) => {
  try {
    const result =  await Tour.find({})
    res.send(result)
  } catch (error) {
    next(error);
  }
};
module.exports.getOneTourController = async (req, res, next) => {
  try {
    const result =  await getOneTourController(req.params.id)
    res.send(result)
  } catch (error) {
    next(error);
  }
};
module.exports.postTourController = async (req, res, next) => {
  try {
    const result = await postTourService(req.body)
    res.send(result)
  } catch (error) {
    next(error);
  }
};
module.exports.updateOneTourController = async (req, res, next) => {
  try {
    const result = await postTourService(req.body)
    res.send(result)
  } catch (error) {
    next(error);
  }
};
