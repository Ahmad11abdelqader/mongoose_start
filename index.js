const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movieApp' ,{useNewUrlParser: true, useUnifiedTopology: true} )
.then(()=>{
console.log("CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO ERRORR!!!")
    console.log(err)
})
/*const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
console.log("CONNECTION OPEN!!!")
});*/
