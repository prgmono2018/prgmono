const SliderDatas = require('../models/SliderModel');
const mongoose = require('mongoose');
var redis = require('redis');
var client = redis.createClient(); // this creates a new client
client.on('connect', function() {
  console.log('Redis client connected');
});

//var winston = require('.../config/winston');
mongoose.Promise = global.Promise;



//Simple version, without validation or sanitation
exports.getSliderData = function (req, res) {
 // winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    //const query = (req.query.query).trim();
    console.log(">>>getSliderData")
/*    client.exists('key', function(err, reply) {
      if (reply === 1) {
          console.log('exists');
      } else {
          console.log('doesn\'t exist');
      }
  });*/


  client.get("yyy", (err, result) => {
    // If that key exist in Redis store
    if (result) {
      console.log("yyy="+result);
      const resultJSON = JSON.parse(result);
      return res.send(resultJSON);
    } else { // Key does not exist in Redis store
      // Fetch directly from Wikipedia API

      SliderDatas.find({}, function(err, sData) {
        // winston.debug(sData)
       if (err) {
           console.log("error="+sData);
     } else{
           console.log(" bo client"+sData);
           // Save the Wikipedia API response in Redis store
           console.debug("set");
           client.set("yyy", JSON.stringify(sData));
           console.debug("after s");
           res.send(sData);
     }
     });
     
    }
  });










  

};

   /*exports.insertToDo = function (req, res) {
  console.log(req.body.txt);
  console.log( req.body.done);
  const newtoDo = new ToDo({ txt: req.body.txt,done:req.body.done });
  newtoDo.save().then(() => console.log('saved'));
 res.send("saved");

    const newTodoObj = new Todo(req.body);
    newTodoObj.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newTodoObj);
     });
  */
//};
//  if (err) return res.status(500).send(err)
  /*exports.deleteToDo = function (req, res) {
      console.log("Need to delete="+req.body._id);
      ToDo.findOneAndDelete({_id: req.body._id }, function(err){
      if (!err){
        res.send("Deleted");
      }
    
      });
};

exports.updateStatus = function (req, res) {
  console.log("Need to upsate status="+req.body._id+ "done="+req.body.done);
  const id=req.body._id;
 /* ToDo.findOneAndDelete({_id: req.body._id }, function(err){
  if (err){
    if (err) return res.status(500).send(err)
  }
  res.send("updated");
  });*/


  /*  Todo.findByIdAndUpdate(req.body._id, { $set: { done:!req.body.done }}, { new: true }, function (err, todo) {
      if (err) return handleError(err);
      res.send(todo);
    });*/
/*const done= !req.body.done;
console.log("done="+done);
    //var query = {_id: eq.body._id};
    var q = { _id: '5bcd7d11a0b7bb1d70347256' };
    console.log("id"+q);
 /*   Todo.findOneAndUpdate(q, {done:'true'},function(err, model) {
      if (err) {
        console.log("bla");
      }else{
        console.log("not err");
        res.send(todo);
      }
  });*/
/*
  Todo.findOneAndUpdate({ _id:"5bcd7d11a0b7bb1d70347256" }, {
    $set: {
     done:!req.body.done
    }
  }, { new: true })
  .then((challengeUpdated) => {
    console.log('Success!')
    console.log(challengeUpdated)
  })
  .catch((err) => {
    console.error('An error occured', err)
  })*/

 /* ToDo.findOneAndUpdate({_id: id},{$set:{done:done}},{new:true})   .then((toDo)=>{
    if(toDo) {
      Promise.resolve({success:true,data:toDo});
    } else {
      Promise.reject({success:false,data:"no such user exist"});
    }
}).catch((err)=>{
  Promise.reject(err);
})
} */
