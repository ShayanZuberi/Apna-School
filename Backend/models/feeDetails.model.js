const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feeDetailsSchema = new Schema({
  //The month of the fee
  feeMonth:{
    type: String,
    required: true,

  },
  //Sum of all individual fees
  totalFee: {
    type: Number,
    required: true,

  //tuition Fee
  },
  tuitionFee: {
    type: Number,
    required: true,

  },
  //If any fines
  fineFee: {
    type: Number,
    required: true,
  },
  //If any security
  securityFee: {
    type : Number,
    required : true,
  },
  //Amount paid as of yet
  paidFee: {
    type : Number,
    required : true,
  },
  remainingFee: {
    type : Number,
    required : true,
  }


}, {
  timestamps: true,
});

const FeeDetails = mongoose.model('FeeDetails', feeDetailsSchema);

module.exports = FeeDetails;