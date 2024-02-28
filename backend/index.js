// // app.get('/',(req,res)=>{
// //     res.send("hellow world");
// // })
// // app.listen(port, ()=>{
// //     console.log('listing to the port ${port}');
// // })

// const express = require('express')
// const app = express()
// const port = 3000
// const mongoDB = require('./db')

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//     //     "Access-Control-Allow-Headers",
//     //     "Origin, X-Requested-Width, Content-Type, Accept"
//     );
//     next();

// })
// app.use(express.json())
// app.use('/api',require("./Routes/"));
// app.use('/api',require("./Routes/"));

// // app.get('/', (req, res)=> { res.send('Hello World')
// // })
// app.listen(port, () => {
//     console.log('Example app listening on port')
// })


// server.js or app.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/your_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for your contact model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: String,
  yourMessage: String,
});

// Create a model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

// Route to handle POST requests from the frontend
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, contactNumber, yourMessage } = req.body;
    console.log("end point hited");
    // console.log("name "+name);
    // console.log("email "+email);
    // console.log("contactNumber "+contactNumber);
    // console.log("yourMessage "+yourMessage);

    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      contactNumber,
      yourMessage,
    });

    // Save the contact to the database
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});




// Registration form start

const regiSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: String,
});

// Create a model based on the schema
const Registration = mongoose.model("Registration", regiSchema);

// Route to handle POST requests from the frontend
app.post("/api/registration", async (req, res) => {
  try {
    const { name, email, contactNumber } = req.body;
    console.log("end point hited");
    // console.log("name "+name);
    // console.log("email "+email);
    // console.log("contactNumber "+contactNumber);

    // Create a new contact document
    const newRegi = new Registration({
      name,
      email,
      contactNumber,
    });

    // Save the contact to the database
    await newRegi.save();

    res.status(201).json({ message: "newRegi saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

