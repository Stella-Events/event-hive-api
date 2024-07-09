import express from "express";
import { dbConnection } from "./config/db.js";
import eventRouter from "./routes/event_routes.js";

// Create express app
const app = express ();

// use Router
app.use(eventRouter)


// use middleware
app.use(express.json());


// Call database
dbConnection();

// Litening on incoming port
const port = 4040
app.listen (port, ()=> {
    console.log(`App listening on port ${port}`)
})