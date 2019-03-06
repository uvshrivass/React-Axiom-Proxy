const mongoose = require("mongoose");

module.exports= mongoose.connect('mongodb://ujjwal:connectmenow123@ds161285.mlab.com:61285/newvisitors',{ useNewUrlParser: true },function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Successfully Connected to the DataBase");
    }
})
