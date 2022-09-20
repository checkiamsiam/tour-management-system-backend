function beforeSave (next) {
  if(this.totalVacancy < this.bookedVacancy){
    return next(new Error("booked vacancy can't be greater than totalVacancy"))
  }
  if (this.totalVacancy && this.bookedVacancy) {
    this.availableVacancy = this.totalVacancy - this.bookedVacancy
  }
  next();
}

module.exports = beforeSave ;