const orm = require('../config/orm.js');

const goal = {
    all : function(cb){
        
        orm.all("goals", function (result){
            
            cb(result);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
      update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }



};//end goals controller object

module.exports = goal;