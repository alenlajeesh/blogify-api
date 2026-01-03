const express = require("express");
const dotenv=require("dotenv").config();
const connectDB =require("./services/db.js")
const PORT = process.env.PORT;
const errorHandler =require("../src/middlewares/error.middleware")
const postRouter = require("./routes/posts.routes");

const app = express();
app.use(express.json())

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Blogify API!");
});

app.use("/api/v1/posts", postRouter);

app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

