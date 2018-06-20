const orm = require('../config/orm.js');

const goal = {
    all : function(cb){
        
        orm.all("goals", function (result){
            
            cb(result);
        });
    }


};//end goals controller object

module.exports = goal;