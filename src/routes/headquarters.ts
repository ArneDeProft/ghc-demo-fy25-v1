import express from 'express';
import { Headquarters } from '../models/headquarters';

const router = express.Router();

let headquartersList: Headquarters[] = [];

// Create a new headquarters
router.post('/', (req, res) => {
  const newHeadquarters: Headquarters = req.body;
  headquartersList.push(newHeadquarters);
  res.status(201).json(newHeadquarters);
});

// Get all headquarters
router.get('/', (req, res) => {
  res.json(headquartersList);
});

// Get a headquarters by ID
router.get('/:id', (req, res) => {
  const headquarters = headquartersList.find(h => h.headquartersId === parseInt(req.params.id));
  if (headquarters) {
    res.json(headquarters);
  } else {
    res.status(404).send('Headquarters not found');
  }
});

// Update a headquarters by ID
router.put('/:id', (req, res) => {
  const index = headquartersList.findIndex(h => h.headquartersId === parseInt(req.params.id));
  if (index !== -1) {
    headquartersList[index] = req.body;
    res.json(headquartersList[index]);
  } else {
    res.status(404).send('Headquarters not found');
  }
});

// Delete a headquarters by ID
router.delete('/:id', (req, res) => {
  const index = headquartersList.findIndex(h => h.headquartersId === parseInt(req.params.id));
  if (index !== -1) {
    headquartersList.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Headquarters not found');
  }
});

export default router;
