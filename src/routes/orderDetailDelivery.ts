import express from 'express';
import { OrderDetailDelivery } from '../models/orderDetailDelivery';

const router = express.Router();

let orderDetailDeliveries: OrderDetailDelivery[] = [];

// Create a new order detail delivery
router.post('/', (req, res) => {
  const newOrderDetailDelivery: OrderDetailDelivery = req.body;
  orderDetailDeliveries.push(newOrderDetailDelivery);
  res.status(201).json(newOrderDetailDelivery);
});

// Get all order detail deliveries
router.get('/', (req, res) => {
  res.json(orderDetailDeliveries);
});

// Get an order detail delivery by ID
router.get('/:id', (req, res) => {
  const orderDetailDelivery = orderDetailDeliveries.find(odd => odd.deliveryId === parseInt(req.params.id));
  if (orderDetailDelivery) {
    res.json(orderDetailDelivery);
  } else {
    res.status(404).send('Order detail delivery not found');
  }
});

// Update an order detail delivery by ID
router.put('/:id', (req, res) => {
  const index = orderDetailDeliveries.findIndex(odd => odd.deliveryId === parseInt(req.params.id));
  if (index !== -1) {
    orderDetailDeliveries[index] = req.body;
    res.json(orderDetailDeliveries[index]);
  } else {
    res.status(404).send('Order detail delivery not found');
  }
});

// Delete an order detail delivery by ID
router.delete('/:id', (req, res) => {
  const index = orderDetailDeliveries.findIndex(odd => odd.deliveryId === parseInt(req.params.id));
  if (index !== -1) {
    orderDetailDeliveries.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Order detail delivery not found');
  }
});

export default router;
