const axios = require('axios');
const marketModel = require('../../models/safemoon/market');	

module.exports = {
  getMarket: async function(req, res, next) {
    marketModel.find({}, function(err, result){
      if (err){
        res.status(400).json({ msg: "Not found" });
      } else{				
        res.status(200).json({msg: "Result found!", data: result});							
      }
    });
  },
}