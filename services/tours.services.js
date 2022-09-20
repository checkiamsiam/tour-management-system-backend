const Tour = require("../models/tour.model");

const postTourService = async (data) => {
  const tour = new Tour(data);
    const result = await tour.save();
    return result
}
const getOneTourController = async (id) => {
  const filter = {_id : id}
  const increaseView = await Tour.updateOne(filter , {$inc : {viewCount : 1}})
  const result  = await Tour.findById(filter)
  return {increaseView , data:result}
}


module.exports = {postTourService , getOneTourController}