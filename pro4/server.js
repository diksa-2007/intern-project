const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const shopRoutes = require("./routes/shopRoutes");

const { errorHandler } = require("./middleware/shopMiddleware");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/shops", shopRoutes);

app.get("/", (req, res) => {
  res.send("Smart Mall Hub Backend Running");
});

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});