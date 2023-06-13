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
  create: function() {
    axios.get('https://api.coingecko.com/api/v3/coins/safemoon?tickers=true'+ new URLSearchParams({
      }))
    .then(async (result) => {
      await marketModel.remove({});
      await  Promise.all(result.data.tickers.forEach( async (item) => {
        let market = {};
        market.name = `${item.market.name}(${item.target})`;
        market.price = item.converted_last.usd;
        try {
          await marketModel.create(market);
          console.log(`success market of ${market.name} : ${market.price}`);
        } catch (error) {
          console.log(err)
        }
      }));
      }).catch((err) => {
        console.log('price api error')
      });
  },
}