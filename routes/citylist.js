var express = require('express');
var router = express.Router();
var { addcity,getCityList } = require('../controller/citylistController');

/* GET users listing. */

router.get('/', function(req, res) {
    res.send('Get API called successfully for the CITY LIST')
});

router.get('/getCity',(req,res)=>{
    getCityList(req,res)
})

router.post('/addCity', (req, res) => {
    addcity(req, res);
});

module.exports = router;