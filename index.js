require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const goalRouter = require("./routes/goalRouter")
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors())// Routes

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Goals Api!" });
});

app.use("/api/goals", goalRouter)

// Error Routes

app.use((req, res) => {
  res.status(404).json({ meessage: "Resource not found" });
});

// db Connections and server listening

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: "goalServer" });
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error)
  }
};

startServer();
