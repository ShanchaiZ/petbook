import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";
//Initialize the express application
const app = express();
//Express Middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello to Petbook!");
});

const CONNECTION_URL =
  "mongodb+srv://sz:123sz123@cluster0.aexxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

//Establish connection to MongoDB Atlas database and this app using mongoose.

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);

//we will be using mongodb cloud atlas to host our database.
