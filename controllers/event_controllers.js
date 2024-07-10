import { EventModel } from "../models/event_model.js"

// ADD
export const postEvent = async (req, res, next) => {
    try {
        // Add event to database
        const newEvent = await EventModel.create({
           ...req.body,
           banner:req.file.filename 
        });
        // Return response
        res.status(201).json('Event added')
    } catch (error) {
        next(error)
    }

}

// GET ALL
export const getEvents = async (req, res, next) => {
    try {
        // Get events from database
        const allEvents = await EventModel.create({
           
        });
        // Return response
        res.status(201).json(allEvents)
    } catch (error) {
        next(error)
    }

}


// DELETE ONE
export const deleteEvent = async (req, res, next) => {
    try {
        // Delete recipe by id
        const deletedEvent = await EventModel.findByIdAndDelete(req.params.id)
        
            res.status(200).json(`Recipe with Id ${req.params.id} deleted`);
       } catch (error) { 
    next (error)
       }
    
    }

    // GET ONE
export const getEvent = async(req, res, next) => {
    try {
        const getOneEvent = await EventModel.findById(req.params.id);
        res.status(200).json(getOneEvent)
    } catch (error) {
        next(error)
    }
}

// PATCH
export const patchEvent = async (req,res, next) => {
    try {
     // Update recipe by ID
 const updatedEvent = await EventModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
 // Return response
 res.status(200).json(updatedEvent);
    } catch (error) {
     next(error)
    }
  }