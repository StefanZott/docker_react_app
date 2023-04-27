const express = require('express')
const path = require("path")
const cors = require('cors');
require("dotenv").config();

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))) 
app.use(cors());

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: The Bear & The Nightingale"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland"
    }
  ])
})


app.listen(process.env.SERVER_PORT, () => {
    console.log("Backend Server start on PORT " + process.env.SERVER_PORT)
})