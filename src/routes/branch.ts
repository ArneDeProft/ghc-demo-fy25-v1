import express from 'express';
import { Branch } from '../models/branch';

const router = express.Router();

let branches: Branch[] = [];

// Create a new branch
router.post('/', (req, res) => {
  const newBranch: Branch = req.body;
  branches.push(newBranch);
  res.status(201).json(newBranch);
});

// Get all branches
router.get('/', (req, res) => {
  res.json(branches);
});

// Get a branch by ID
router.get('/:id', (req, res) => {
  const branch = branches.find(b => b.branchId === parseInt(req.params.id));
  if (branch) {
    res.json(branch);
  } else {
    res.status(404).send('Branch not found');
  }
});

// Update a branch by ID
router.put('/:id', (req, res) => {
  const index = branches.findIndex(b => b.branchId === parseInt(req.params.id));
  if (index !== -1) {
    branches[index] = req.body;
    res.json(branches[index]);
  } else {
    res.status(404).send('Branch not found');
  }
});

// Delete a branch by ID
router.delete('/:id', (req, res) => {
  const index = branches.findIndex(b => b.branchId === parseInt(req.params.id));
  if (index !== -1) {
    branches.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Branch not found');
  }
});

export default router;
