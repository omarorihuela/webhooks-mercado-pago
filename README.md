# webhooks-mercado-pago

## Description

A Node.js API that handles MercadoPago webhooks notifications to process payment status updates.

## Installation

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory
2. Add your MercadoPago credentials:

```
MERCADOPAGO_ACCESS_TOKEN=your_access_token
```

## Usage

Start the server:

```bash
npm start
```

The API will listen for webhook notifications from MercadoPago at:

```
POST purcase-order/webhook
```

## Project Structure

```
src/
├── config/       # Configuration files
├── controllers/  # Request handlers
├── routes/       # API routes
└── index.js      # Entry point
```

## Requirements

- Node.js v14+
- NPM v6+
- MercadoPago account and credentials
