const mongoose = require('mongoose');

const calculatorSchema = new mongoose.Schema({
   num1: {
        type: Number,
    },
    num2: {
       type: Number
    }, 
    total: {
       type: Number 
    }
}
)

module.exports = mongoose.model('Result', calculatorSchema);
