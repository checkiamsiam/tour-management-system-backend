const express = require('express');
const { postTourController, getTourController } = require('../controllers/tours.controllers');
const toursRoute = express.Router()

toursRoute.route('/tours').get(getTourController).post(postTourController)

module.exports = toursRoute