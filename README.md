# Demo of GitHub Copilot Agent Mode

This project is set up to demo various GitHub Copilot features, including:
- agent mode
- vision
- Next Edit Suggestion (NES)

Instructions for how to demo are located in the [demo script](./docs/demo-script.md).

# TypeScript API Project

This project provides a set of CRUD APIs for managing various entities as defined in the  [Entity-Relationship Diagram](./ERD.png). The entities include Supplier, Delivery, Order Detail Delivery, Product, Order Detail, Order, Branch, and Headquarters.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v10.2.3 or later)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/colindembovsky/ts-api.git
   cd ts-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Build the project:
   ```sh
   npm run build
   ```

4. Start the server:
   ```sh
   npm start
   ```

   Alternatively, you can start the server in development mode:
   ```sh
   npm run dev
   ```

### Docker

You can also run the application using Docker:

#### Run from GitHub Container Registry

Pull and run the image directly from GitHub Container Registry:

```sh
docker pull ghcr.io/arnedeproft/ghc-demo-fy25-v1:main
docker run -p 3000:3000 ghcr.io/arnedeproft/ghc-demo-fy25-v1:main
```

#### Build and run locally

Build the Docker image:

```sh
docker build -t ts-api .
```

Run the Docker container:

```sh
docker run -p 3000:3000 ts-api
```

The API will be available at http://localhost:3000.

### API Endpoints

The following endpoints are available for each entity:

#### Supplier

- `POST /api/suppliers`: Create a new supplier
- `GET /api/suppliers`: Get all suppliers
- `GET /api/suppliers/:id`: Get a supplier by ID
- `PUT /api/suppliers/:id`: Update a supplier by ID
- `DELETE /api/suppliers/:id`: Delete a supplier by ID

#### Delivery

- `POST /api/deliveries`: Create a new delivery
- `GET /api/deliveries`: Get all deliveries
- `GET /api/deliveries/:id`: Get a delivery by ID
- `PUT /api/deliveries/:id`: Update a delivery by ID
- `DELETE /api/deliveries/:id`: Delete a delivery by ID

#### Order Detail Delivery

- `POST /api/order-detail-deliveries`: Create a new order detail delivery
- `GET /api/order-detail-deliveries`: Get all order detail deliveries
- `GET /api/order-detail-deliveries/:id`: Get an order detail delivery by ID
- `PUT /api/order-detail-deliveries/:id`: Update an order detail delivery by ID
- `DELETE /api/order-detail-deliveries/:id`: Delete an order detail delivery by ID

#### Product

- `POST /api/products`: Create a new product
- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a product by ID
- `PUT /api/products/:id`: Update a product by ID
- `DELETE /api/products/:id`: Delete a product by ID

#### Order Detail

- `POST /api/order-details`: Create a new order detail
- `GET /api/order-details`: Get all order details
- `GET /api/order-details/:id`: Get an order detail by ID
- `PUT /api/order-details/:id`: Update an order detail by ID
- `DELETE /api/order-details/:id`: Delete an order detail by ID

#### Order

- `POST /api/orders`: Create a new order
- `GET /api/orders`: Get all orders
- `GET /api/orders/:id`: Get an order by ID
- `PUT /api/orders/:id`: Update an order by ID
- `DELETE /api/orders/:id`: Delete an order by ID

#### Branch

- `POST /api/branches`: Create a new branch
- `GET /api/branches`: Get all branches
- `GET /api/branches/:id`: Get a branch by ID
- `PUT /api/branches/:id`: Update a branch by ID
- `DELETE /api/branches/:id`: Delete a branch by ID

#### Headquarters

- `POST /api/headquarters`: Create a new headquarters
- `GET /api/headquarters`: Get all headquarters
- `GET /api/headquarters/:id`: Get a headquarters by ID
- `PUT /api/headquarters/:id`: Update a headquarters by ID
- `DELETE /api/headquarters/:id`: Delete a headquarters by ID

### Example Requests

Here are some example requests you can use to test the APIs:

#### Create a new supplier

```sh
curl -X POST http://localhost:3000/api/suppliers -H "Content-Type: application/json" -d '{"deliveryId": 1, "deliveryDate": "2023-01-01", "supplierId": 1}'
```

#### Get all suppliers

```sh
curl http://localhost:3000/api/suppliers
```

#### Get a supplier by ID

```sh
curl http://localhost:3000/api/suppliers/1
```

#### Update a supplier by ID

```sh
curl -X PUT http://localhost:3000/api/suppliers/1 -H "Content-Type: application/json" -d '{"deliveryId": 1, "deliveryDate": "2023-01-02", "supplierId": 1}'
```

#### Delete a supplier by ID

```sh
curl -X DELETE http://localhost:3000/api/suppliers/1
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
