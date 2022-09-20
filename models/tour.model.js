const mongoose = require('mongoose');
const beforeSave = require('../middleware/tourSavePre');

const tourSchema =  mongoose.Schema({
  title : {
    type : String ,
    required : [true , "title required"] , 
    unique : [true , "tour title should be unique"],
    trim: true,
  }, 
  type : {
    type: String , 
    enum : {
      values : ["Family" , "Honeymoon" , "Friends" , "Dating" , "Everyone"] , 
      message: "type is invalid"
    }
  } ,
  description: {
    type : String , 
    minLength: [20 , "description is too short"]
  }, 
  places : {
    type: [String] , 
    required : true
  }, 
  subscriptionCost : {
    type: Number , 
    required : [true, "subscriptionCost details required"],
    min : [0 , "cost can't be negative"]
  },
  duration: {
    type: String , 
    required : [true, "duration details required"],
  }, 
  totalVacancy : {
    type : Number , 
    required : [true , "total vacancy should be mentioned"], 
    min: [50 , "total vacancy have to be minimum 50"] ,
    validate : {
      validator : (value) => {
        if (Number.isInteger(value)) {
          return true;
        } else {
          return false;
        }
      }, 
      message: "vacancy should be an integer"
    }
  }, 
  bookedVacancy: {
    type : Number , 
    required : [true , "booked vacancy should be mentioned"], 
    min: 0 , 
    validate : {
      validator : (value) => {
        if (Number.isInteger(value)) {
          return true;
        } else {
          return false;
        }
      }, 
      message: "vacancy should be an integer"
    }
  },
  availableVacancy: {
    type: Number , 
    min : 0
  }, 
  viewCount: {
    type: Number , 
    default : 0
  },
} , {
  timestamps: true
})

tourSchema.pre('save', beforeSave);

const Tour = mongoose.model( "Tour" , tourSchema)

module.exports = Tour ;