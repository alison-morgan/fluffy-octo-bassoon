const Region = require('../models/coffee').region;

module.exports = function(router) {

router.route('/regions')

  .get(function(req, res) {
    Region.find((err, region) => {
      if (err)
        res.send(err);
      res.json(region);
    })
  });

}
