const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const connectDB = require("./src/config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://frontend-public:80",
  "http://frontend-dashboard:80",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        /* 
        The first argument (null) means no error occurred.
        The second argument (true) means allow the request (CORS is enabled for this 
        */
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // Limit each IP to 100 requests per windowMs. { windowMs: 15 * 60 * 1000 → 15 minutes }

// Routes
const authRoutes = require("./src/routes/authRoutes");
app.use("/api/v1/auth", authRoutes);

const webRoutes = require("./src/routes/webRoutes");
app.use("/api/v1/", webRoutes);

// Error handler middleware
//app.use(require("./middlewares/errorHandler"));

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
