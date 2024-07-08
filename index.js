import express from "express";

// Create express app
const app = express ();

// Litening on incoming port
const port = 4040
app.listen (port, ()=> {
    console.log(`App listening on port ${port}`)
})