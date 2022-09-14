var express = require('express');
var router = express.Router();
var { getMeals, addMeals } = require('../controller/mealsController');

/* GET users listing. */

router.get('/', function (req, res, next) {
    res.send('Get API called successfully for the MEALS')
});

router.get('/getMeals', function (req, res, next) {
    getMeals(req, res, next);
});

router.post('/addMeal', function (req, res, next) {
    addMeals(req, res, next);
});

module.exports = router;
