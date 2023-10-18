require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./configs/corsOptions");
const express = require("express");
const app = express();

// middlewares
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//routes
/**
 * auth
 * city
 * show
 * theater
 * booking
 * schedule
 */

app.use("/auth", require("./routes/auth"));
app.use("/city", require("./routes/city"));
// app.use("/show", require("./routes/show"));
// app.use("/theater", require("./routes/theater"));
app.use("/booking", require("./routes/booking"));
app.use("/schedule", require("./routes/schedule"));

app.listen(3000, "localhost", () => {
  console.log("started on 3000");
});
