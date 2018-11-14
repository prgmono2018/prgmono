//server/routes/routes.js
var express = require('express');
var router = express.Router();
const slider_controller = require('../controller/sliderController');

router.get('/', function(req, res){
  res.render('index')
});

router.get('/sliderData',slider_controller.getSliderData);
//router.post('/insert',todo_controller.insertToDo);
//router.post('/delete',todo_controller.deleteToDo);
//router.put('/updateStatus',todo_controller.updateStatus);
//router.get('/insertToDo',todo_controller.insertToDo);
module.exports = router;
