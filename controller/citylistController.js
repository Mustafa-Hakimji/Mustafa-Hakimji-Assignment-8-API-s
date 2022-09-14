var citylistSchema = require("../model/citylistModel")


getCityList = (req,res)=>{
    citylistSchema.find((err,response)=>{
        if(err)
        response.send(err)
        else
        res.send(response)
    })
}

addcity = (req, res,next) => {
    var cityToAdd = new citylistSchema({
        location_id: req.body.location_id,
        name: req.body.name,
        city: req.body.city
    });
    cityToAdd.save((err, response) => {
        if (err)
            res.send("some Exception occured")
        else
            res.send({ status: 200, message: "City Added successfully", city: response })
    })
}


module.exports = { addcity,getCityList }