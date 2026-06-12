const express = require("express");
const cors = require("cors");
require("dotenv").config();

const publicRoutes = require("./routes/publicRoutes");
const privateRoutes = require("./routes/privateRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes register karo
app.use("/api/public", publicRoutes);
app.use("/api/private", privateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
