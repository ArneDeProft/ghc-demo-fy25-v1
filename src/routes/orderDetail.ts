import express from 'express';
import { OrderDetail } from '../models/orderDetail';

const router = express.Router();

let orderDetails: OrderDetail[] = [];

// Create a new order detail
router.post('/', (req, res) => {
  const newOrderDetail: OrderDetail = req.body;
  orderDetails.push(newOrderDetail);
  res.status(201).json(newOrderDetail);
});

// Get all order details
router.get('/', (req, res) => {
  res.json(orderDetails);
});

// Get an order detail by ID
router.get('/:id', (req, res) => {
  const orderDetail = orderDetails.find(od => od.orderDetailId === parseInt(req.params.id));
  if (orderDetail) {
    res.json(orderDetail);
  } else {
    res.status(404).send('Order detail not found');
  }
});

// Update an order detail by ID
router.put('/:id', (req, res) => {
  const index = orderDetails.findIndex(od => od.orderDetailId === parseInt(req.params.id));
  if (index !== -1) {
    orderDetails[index] = req.body;
    res.json(orderDetails[index]);
  } else {
    res.status(404).send('Order detail not found');
  }
});

// Delete an order detail by ID
router.delete('/:id', (req, res) => {
  const index = orderDetails.findIndex(od => od.orderDetailId === parseInt(req.params.id));
  if (index !== -1) {
    orderDetails.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Order detail not found');
  }
});

export default router;
