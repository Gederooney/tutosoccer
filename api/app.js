const http = require("http");
const express = require("express");
const { connectDB } = require("./config/db");
const cors = require("cors");

const app = express();
app.use(cors());

connectDB();

//Clients endpoints
app.use("/api/scoreboard", require("./routes/clients/scoreboard"));
app.use("/api/transfers", require("./routes/clients/transfers"));

//admin endpoints


const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
