const express = require("express");

const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const cors = require("cors");
var bodyParser = require("body-parser");
const prisma = new PrismaClient();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());




module.exports = router;
