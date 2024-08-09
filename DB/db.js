import mongoose from "mongoose";

// Connection URI
const dbURI = "mongodb://localhost:27017/jaspreet_node";

// Database connection function
const dbConnection = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error: DB Not Connected - " + error.message);
  }
}

export default dbConnection;
