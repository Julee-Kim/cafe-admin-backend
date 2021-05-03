const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  menus: {
    type: Array,
    default: []
  },
  storeId: {
    type: String,
  },
  storeName: {
    type: String,
  },
  receiverName: { 
    type: String
  },
  receiverPhone: { 
    type: String
  },
  receiverZonecode: { 
    type: String
  },
  receiverAddress: { 
    type: String
  },
  totalPrice: { 
    type: Number
  },
  orderPrice: { 
    type: Number
  },
  deliveryPrice: { 
    type: Number
  },
  create_date: {
    type: Date,
  },
});

const Order = mongoose.model('order', orderSchema);

module.exports = { Order }
