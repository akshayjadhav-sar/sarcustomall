const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/db.registration')
const mongoDB = async () => {


    const express = require("express");
    // const mongoose = require("mongoose");
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
    const Contact = mongoose.model("registration", registrationSchema);
    
    // const express = require("express");
    // // const mongoose = require("mongoose");
    // const bodyParser = require("body-parser");
    // const cors = require("cors"); // Import the cors middleware
    
    // const app = express();
    // const PORT = 5000;
    
    // // Middleware
    // app.use(bodyParser.json());
    // app.use(cors()); // Enable CORS for all routes
    
    // // Connect to MongoDB
    // mongoose.registrations("mongodb://localhost:27017/your_database", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    
    // // Create a schema for your contact model
    // const contactSchema = new mongoose.Schema({
    //   name: String,
    //   email: String,
    //   contactNumber: String,
    // });
    
    // // Create a model based on the schema
    // const Contact = mongoose.model("Registration", registrationsSchema);
    
    
}
module.exports = mongoDB();