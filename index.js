import express from "express";
import { dbConnection } from "./config/db.js";
import eventRouter from "./routes/event_routes.js";
import collegeRouter from "./routes/college.js";

// Create express app
const app = express ();

// use middleware
app.use(express.json());

// Use routes
app.use(collegeRouter);
app.use(eventRouter)

// Call database
dbConnection();

// Litening on incoming port
const port = 4040
app.listen (port, ()=> {
    console.log(`App listening on port ${port}`)
})