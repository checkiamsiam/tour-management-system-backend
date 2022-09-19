const mongoose = require('mongoose');

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
  }, 
  places : {
    type: [String] 
  }, 
  subscriptionCost : {
    type: Number , 
    required : true , 
    min : 0
  },
  duration: {
    type: String , 
    required : true,
  }, 
  totalVacancy : {
    type : Number , 
    required : true, 
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
    required : true, 
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
    required : true, 
    min : 0
  }

} , {
  timestamps: true
})

tourSchema.pre('save', function (next) {
  if(this.totalVacancy < this.bookedVacancy){
    return next(new Error("booked vacancy can't be greater than totalVacancy"))
  }
  if (this.totalVacancy && this.bookedVacancy) {
    this.availableVacancy = this.totalVacancy - this.bookedVacancy
  }
  next();
});

const Tour = mongoose.model( "Tour" , tourSchema)

module.exports = Tour ;