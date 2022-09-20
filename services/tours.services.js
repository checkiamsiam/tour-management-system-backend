const Tour = require("../models/tour.model");

module.exports.getAllTourService = async (filter, queries) => {
  const skipData = (queries.page - 1) * queries.limit
  return await Tour.find(filter).select(queries.fields).sort(queries.sort).skip(skipData).limit(queries.limit)
};

module.exports.postTourService = async (data) => {
  const tour = new Tour(data);
  const result = await tour.save();
  return result;
};

module.exports.getOneTourService = async (id) => {
  const filter = { _id: id };
  await Tour.updateOne(filter, { $inc: { viewCount: 1 } });
  const result = await Tour.findById(filter);
  return result;
};

module.exports.updateOneTourService = async (id, data) => {
  const filter = { _id: id };
  // const result = await Tour.findByIdAndUpdate(filter, { $set: data }, { new: true, runValidators: true });
  const updatedItem = await Tour.findById(filter);
  const result = await updatedItem.set(data).save();
  return result;
};

module.exports.getTopThreeTrendingServices = async () => {
  const result = await Tour.find({}).sort("-viewCount -createdAt -bookedVacancy").limit(3);
  return result;
};

module.exports.getTopThreeCheapService = async () => {
  const result = await Tour.find({}).sort("subscriptionCost").limit(3);
  return result;
};
