const Tour = require("../models/tour.model");
const {
  postTourService,
  updateOneTourService,
  getOneTourService,
  getTopThreeTrendingServices,
  getTopThreeCheapService,
  getAllTourService,
} = require("../services/tours.services");

module.exports.getTourController = async (req, res, next) => {
  try {
    const filter = {...req.query}
    let queries = {limit: 5 , page: 1}
    const queryProperty = ["sort" , "fields" , "limit" , "page" ]
    queryProperty.map( p => {
      delete filter[p]
      if(req.query[p]){
        queries[p] = req.query[p].split(',').join(' ')
        if(p === "limit" || p === "page"){
          queries[p] = +queries[p]
        }
      }
    })
    console.log(filter);
    const result = await getAllTourService(filter , queries)
    res.send(result);
  } catch (error) {
    next(error);
  }
};


module.exports.getOneTourController = async (req, res, next) => {
  try {
    const result = await getOneTourService(req.params.id);
    res.send(result);
  } catch (error) {
    next(error);
  }
};


module.exports.postTourController = async (req, res, next) => {
  try {
    const result = await postTourService(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
};


module.exports.updateOneTourController = async (req, res, next) => {
  try {
    const result = await updateOneTourService(req.params.id, req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
};


module.exports.getTopThreeTrendingController = async (req, res, next) => {
  try {
    const result = await getTopThreeTrendingServices();
    res.send(result);
  } catch (error) {
    next(error);
  }
};


module.exports.getTopThreeCheapController = async (req, res, next) => {
  try {
    const result = await getTopThreeCheapService();
    res.send(result);
  } catch (error) {
    next(error);
  }
};
