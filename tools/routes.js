import express from 'express';
import path from 'path';
import Exercise from '../tools/models/Exercise';

/* eslint-disable no-console */

const router = express.Router();

router.post('/api/exercises', (req, res) => {
  // to-do check for errors in req.query
  // console.log(req.params);
  // console.log(req.query);
  console.log(req.body);

  const newExercise = new Exercise({
    name: req.body.name,
    weight: req.body.weight,
    sets: req.body.sets,
    reps: req.body.reps,
    category: req.body.category
  });

  newExercise.save((err, data) => {
    if (err) {
      console.log('error saving exercise');
      res.send(500);
    } else
      res.send(200);
  });
});

router.get('/api/exercises', (req,res) => {
  Exercise.find({}, (err, results) => {
    if (err)
      console.log('no results found');
    res.send(results);
  });
});

export default router;



