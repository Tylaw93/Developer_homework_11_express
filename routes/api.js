import {Router} from "express";
import db from "../db/service.js";

// set up a new router object
const router =  new Router();

// when you got to the site folled by /notes the server waits for the req and response
router.get("/notes", async (req, res) =>{
  // stores the return from the index function which in this case is a json file
  const notes = await db.index();

  // response with an ok status and then json parse the notes
  res.status(200).json(notes);
});

router.post("/notes", ({ body }, res) =>{
  // go to the db 
  db.create(body)
  res.status(201).send("Note added")
});

router.delete("/notes/:id", (req, res) => {});

export default router;