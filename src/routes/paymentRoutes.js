const router = require("express").Router();
const {
  createPaymentIntent,
  confirmPayment
} = require("../controllers/paymentController");

router.post("/create-payment-intent", createPaymentIntent);
router.post("/confirm-payment", confirmPayment);

module.exports = router;
