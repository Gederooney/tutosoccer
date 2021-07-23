const http = require("http");
const express = require("express");
const { connectDB } = require("./config/db");
const cors = require("cors");

const app = express();
app.use(cors());

connectDB();

app.use("/api/scoreboard", require("./routes/clients/scoreboard"));
app.use("/api/transfers", require("./routes/clients/transfers"));

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
