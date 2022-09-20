const express = require("express");
const {
  postTourController,
  getTourController,
  getOneTourController,
  updateOneTourController,
  getTopThreeTrendingController,
  getTopThreeCheapController,
} = require("../controllers/tours.controllers");
const toursRoute = express.Router();

/**
 * @api method{get}  ->  get top three trending tours
 * @api description  ->  tours is sorted by  Descending order of  viewCount -> createdAt -> bookedVacancy and limited by three
 *
 * @api success response  ->   [{},{},{}]
 * @api error result -> {success: false , message : error}
 *
 */
toursRoute.get("/tours/trending", getTopThreeTrendingController);
/**
 * @api method{get}  ->  get top three cheapest tours
 * @api description  ->  tours is sorted by  ascending order of  subscriptionCost and limited by three
 *
 * @api success response  ->   [{},{}.{}]
 * @api error result ->    {success: false , message : error}
 *
 */
toursRoute.get("/tours/cheapest", getTopThreeCheapController);

toursRoute
  .route("/tours")
   /**
   * @api method{get}  ->  access of all tour data
   * @api description  ->  data is fully user flexible. user can set anything from frontend api hit. and he will get his required data in response
   *
   * @api success response  -> data[{},{},...]
   * @api error result -> {success: false , message : error}
   *
   */
  .get(getTourController)
  /**
   * @api method{post}  ->  add a new tour
   * @api description  ->  add a new tour in db collection. and data is validating by schema.
   *
   * @api success response  -> postedData{}
   * @api error result -> {success: false , message : error}
   *
   */
  .post(postTourController);

toursRoute
  .route("/tours/:id")
  /**
   * @api method{get}  ->  get a specific tour
   * @api description  ->  id is passing through request params and querying a single tour by this id
   *
   * @api success response  ->  data {}
   * @api error result -> {success: false , message : error}
   *
   */
  .get(getOneTourController)
  /**
   * @api method{patch}  ->  update a tour
   * @api description  ->  filtering by id , tour is updating by the set operator and updating data is passing though body and counting view.
   *
   * @api success response  ->  updated data {}
   * @api error result -> {success: false , message : error}
   *
   */
  .patch(updateOneTourController);

module.exports = toursRoute;
