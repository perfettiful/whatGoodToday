var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var goal = require("../models/goals");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log("Inside / route------");

  goal.all(function(data) {
   
    var hbsObject = {
      goal: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/test", function(req, res) {
    console.log("inside test")
  res.send("test")
});

router.post("/api/goals", function(req, res) {
  goal.create([
    "name", "accomplished"
  ], [
    req.body.name, req.body.eaten
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/goals/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  goal.update({
    accomplished: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/goals/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  goal.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;