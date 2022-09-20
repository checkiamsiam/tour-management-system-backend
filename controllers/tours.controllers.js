const Tour = require("../models/tour.model");
const { postTourService, updateOneTourService, getOneTourService, getTopThreeTrendingServices } = require("../services/tours.services");

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
    const result =  await getOneTourService(req.params.id)
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
    const result = await updateOneTourService(req.params.id , req.body)
    res.send(result)
  } catch (error) {
    next(error);
  }
};
module.exports.getTopThreeTrendingController = async (req, res, next) => {
  try {
    const result = await getTopThreeTrendingServices()
    res.send(result)
  } catch (error) {
    next(error);
  }
};
