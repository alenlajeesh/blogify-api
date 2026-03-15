const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const order = await Order.create({
    user: req.user,
    amount: req.body.amount,
    paymentIntentId: req.body.paymentIntentId
  });

  res.json(order);
};

exports.myOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user });
  res.json(orders);
};

exports.getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
};
