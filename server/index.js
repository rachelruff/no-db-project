const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");
const bodyParser = require("body-parser");
const ne = require("./controllers/new_entries");

const app = express();

app.use(cors());
app.use(json());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

const baseURL = "/api/messages";
app.post(baseURL, ne.create);
app.get(baseURL, ne.read);
app.put(`${baseURL}/:id`, ne.update);
app.delete(`${baseURL}/:id`, ne.delete);

const port = 3001;

const controller = require("./controllers/control.js");

// const libraryBaseUrl = "/api/library";
// app.post(libraryBaseUrl, ne.create);
// app.get(libraryBaseUrl, ne.read);
// app.put(`${libraryBaseUrl}/:id`, ne.update);
// app.delete(`${libraryBaseUrl}/:id`, ne.delete);

app.get("/api/getJoke", (req, res, next) => {
  axios
    .get("http://api.yomomma.info/")
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(console.log);
});

// app.get("/api/favorites", controller.getFavorites);

// app.post("/api/getApiData", controller.getApiData);
// app.post("/api/favorites", controller.addFavorites);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
