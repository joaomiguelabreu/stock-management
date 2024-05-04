const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

//OBTER O NOSSO SERVER API
app.get("/", (req, res) => {
  res.send("API is running");
});

//OBTER TODOS OS JSON DO DATA NOTES
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//OBTER APENAS UM DOS JSONS PELO ID
//The way we can fecth the ID from our url is by using req.params, if we type req.params it ill have all the parameters we have inside of our ID
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
