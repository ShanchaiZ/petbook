import express from "express"; //framework for routing of application
import bodyParser from "body-parser"; //enables SEND post requests
import mongoose from "mongoose"; //used to model posts
import cors from "cors";//enables CROSS ORIGIN RESOURCE SHARING which allows a browser to load resources to any origin.

//Initialize the express application
const app = express ();

//General set up for bodyParser so we can properly sent requests:
app.use(bodyParser.json({ limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://sz:123sz123@cluster0.aexxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

//Establish connection to MongoDB Atlas database and this app using mongoose.
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify" , false); OLD AND OBSOLUTE CODE

//we will be using mongodb cloud atlas to host our database.