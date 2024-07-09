import express from "express";
import { dbConnection } from "./config/db.js";
import collegeRouter from "./routes/college.js";
// Create express app
const app = express ();

app.use(express.json());
app.use(collegeRouter);

// Call database
dbConnection();

// Litening on incoming port
const port = 4040
app.listen (port, ()=> {
    console.log(`App listening on port ${port}`)
})