const mongoose = require('mongoose');
let SliderData = new mongoose.Schema({
    server: {type: String},
    sliderPic:{type: String },
    icons:{type: [String] },
});


// Export the model
module.exports = mongoose.model('SliderData', SliderData);
