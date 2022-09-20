const express = require('express');
const { postTourController, getTourController , getOneTourController , updateOneTourController} = require('../controllers/tours.controllers');
const toursRoute = express.Router()

toursRoute.route('/tours').get(getTourController).post(postTourController)
toursRoute.route('/tours/:id').get(getOneTourController).patch(updateOneTourController)

module.exports = toursRoute