import { Router } from "express";
import { deleteEvent, getEvent, getEvents, patchEvent, postEvent } from "../controllers/event_controllers.js";




const eventRouter = Router ();


eventRouter.get('/event', getEvents);
eventRouter.post('/event', postEvent );
eventRouter.delete('/event/:id', deleteEvent );
eventRouter.patch('/event/:id',  patchEvent);
eventRouter.get('/event/:id', getEvent);


export default eventRouter;