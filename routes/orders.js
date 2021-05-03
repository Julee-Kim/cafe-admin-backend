const express = require('express');
const router = express.Router();
const { Order } = require("../models/Order");
const { Product } = require('../models/Product');
const { User } = require('../models/User');

//=================================
//             Order
//=================================

router.get('/sales', async (req, res) => {
  const { year } = req.query;
  const lists = await Order.find(
    { create_date: { $gte: `${year}-01-01`, $lte: `${year}-12-31` } }
  )

  res.status(200).json({ success: true, lists })
})

router.get('/analysis', async (req, res) => {
  const { year } = req.query;
  const orders = await Order.find(
    { create_date: { $gte: `${year}-01-01`, $lte: `${year}-12-31` } }
  )

  let result = [];

  let order;
  for(order of orders) {
    const user = await User.findOne({_id: order.userId});
    let newOrder ={
      birth: user.birth,
      gender: user.gender,
      menuCategory: '',
      price: order.orderPrice,
      order_date: order.create_date,
    }

    const product = await Product.findOne({_id: order.menus[0].id});
    newOrder.menuCategory = product.category;
    result.push(newOrder);
  }

  res.status(200).json({ success: true, lists: result })
})

module.exports = router;