const http = require("http");
const express = require("express");
const { connectDB } = require("./config/db");
const cors = require("cors");

const app = express();
app.use(cors());

connectDB();

app.use("/api/scoreboard", require("./routes/clients/scoreboard"));

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
