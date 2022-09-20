const Tour = require("../models/tour.model");




const postTourService = async (data) => {
  const tour = new Tour(data);
  const result = await tour.save();
  return result;
};


const getOneTourService = async (id) => {
  const filter = { _id: id };
  const increaseView = await Tour.updateOne(filter, { $inc: { viewCount: 1 } });
  const result = await Tour.findById(filter);
  return { increaseView, data: result };
};


const updateOneTourService = async (id, data) => {
  const filter = { _id: id };
  // const result = await Tour.findByIdAndUpdate(filter, { $set: data }, { new: true, runValidators: true });
  const updatedItem = await Tour.findById(filter)
  const result = await updatedItem.set(data).save()
  return result;
};


const getTopThreeTrendingServices = async () => {
  const result = await Tour.find({}).sort('-viewCount -createdAt -bookedVacancy').limit(3)
  return result
  
};


const getTopThreeCheapService = async () => {
  const result = await Tour.find({}).sort('subscriptionCost').limit(3)
  return result
  
};



module.exports = { postTourService, getOneTourService, updateOneTourService , getTopThreeTrendingServices , getTopThreeCheapService };
