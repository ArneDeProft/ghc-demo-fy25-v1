import express from 'express';
import { Order } from '../models/order';

const router = express.Router();

let orders: Order[] = [];

// Create a new order
router.post('/', (req, res) => {
  const newOrder: Order = req.body;
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Get all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// Get an order by ID
router.get('/:id', (req, res) => {
  const order = orders.find(o => o.orderId === parseInt(req.params.id));
  if (order) {
    res.json(order);
  } else {
    res.status(404).send('Order not found');
  }
});

// Update an order by ID
router.put('/:id', (req, res) => {
  const index = orders.findIndex(o => o.orderId === parseInt(req.params.id));
  if (index !== -1) {
    orders[index] = req.body;
    res.json(orders[index]);
  } else {
    res.status(404).send('Order not found');
  }
});

// Delete an order by ID
router.delete('/:id', (req, res) => {
  const index = orders.findIndex(o => o.orderId === parseInt(req.params.id));
  if (index !== -1) {
    orders.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Order not found');
  }
});

export default router;
