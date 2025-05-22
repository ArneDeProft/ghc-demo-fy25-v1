import express from 'express';
import { Delivery } from '../models/delivery';

const router = express.Router();

let deliveries: Delivery[] = [];

// Create a new delivery
router.post('/', (req, res) => {
  const newDelivery: Delivery = req.body;
  deliveries.push(newDelivery);
  res.status(201).json(newDelivery);
});

// Get all deliveries
router.get('/', (req, res) => {
  res.json(deliveries);
});

// Get a delivery by ID
router.get('/:id', (req, res) => {
  const delivery = deliveries.find(d => d.deliveryId === parseInt(req.params.id));
  if (delivery) {
    res.json(delivery);
  } else {
    res.status(404).send('Delivery not found');
  }
});

// Update a delivery by ID
router.put('/:id', (req, res) => {
  const index = deliveries.findIndex(d => d.deliveryId === parseInt(req.params.id));
  if (index !== -1) {
    deliveries[index] = req.body;
    res.json(deliveries[index]);
  } else {
    res.status(404).send('Delivery not found');
  }
});

// Delete a delivery by ID
router.delete('/:id', (req, res) => {
  const index = deliveries.findIndex(d => d.deliveryId === parseInt(req.params.id));
  if (index !== -1) {
    deliveries.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Delivery not found');
  }
});

export default router;
