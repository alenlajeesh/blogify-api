const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  createOrder,
  myOrders,
  getOrder
} = require("../controllers/orderController");

router.post("/", auth, createOrder);
router.get("/my-orders", auth, myOrders);
router.get("/:id", auth, getOrder);

module.exports = router;
