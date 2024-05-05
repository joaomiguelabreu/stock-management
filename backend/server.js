const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

const userRoutes = require ("./routes/userRoutes")

//CORS________________________________________________

app.use(
  cors({
    origin:'http://localhost:3000',
    // origin:'http://localhost:5173',
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

//API________________________________________________

//User API
app.post("/api/users", userRoutes);



//OBTER O NOSSO SERVER API
app.get("/", (req, res) => {
  res.send("API is running");
});

//OBTER TODOS OS JSON DO DATA NOTES
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//CONNECTION TO THE SERVER______________________________
const PORT = process.env.PORT || 5555;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

//OBTER APENAS UM DOS JSONS PELO ID
//The way we can fecth the ID from our url is by using req.params, if we type req.params it ill have all the parameters we have inside of our ID
// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);

//   res.send(note);
// });
