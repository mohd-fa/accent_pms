const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require("./helpers/init_mongodb");
const {
  verifyAccessToken,
  verifyAdminAccessToken,
  verifySubAdminAccessToken,
} = require("./helpers/jwt_helper");
const AuthRoute = require("./routes/Auth.route");
const AdminRoute = require("./routes/Admin.route");
const SubAdminRoute = require("./routes/SubAdmin.route");
const ClientRoute = require("./routes/Client.route");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", verifyAccessToken, ClientRoute);

app.use("/subadmin", verifySubAdminAccessToken, SubAdminRoute);
app.use("/admin", verifyAdminAccessToken, AdminRoute);

app.use("/auth", AuthRoute);

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use(async (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(express.json());
