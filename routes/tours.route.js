const express = require('express');
const { postTourController, getTourController , getOneTourController , updateOneTourController, getTopThreeTrendingController , getTopThreeCheapController} = require('../controllers/tours.controllers');
const toursRoute = express.Router()

toursRoute.get('/tours/trending' , getTopThreeTrendingController)
toursRoute.get('/tours/cheapest' , getTopThreeCheapController)
toursRoute.route('/tours').get(getTourController).post(postTourController)
toursRoute.route('/tours/:id').get(getOneTourController).patch(updateOneTourController)

module.exports = toursRoute