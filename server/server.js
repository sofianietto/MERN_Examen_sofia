const express = require("express");
const cors = require('cors')
const app = express();

require('dotenv').config();

app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config");

const PetRouter = require("./routes/pet.routes");
app.use("/api/pet", PetRouter);

const PORT = process.env.PUERTO;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));