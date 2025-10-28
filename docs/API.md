# API Documentation

## Overview

This document describes the conceptual API structure for Reverie Network. Currently, the site uses mock data and does not connect to live APIs.

## Future API Endpoints

### Network Information

#### Get Network Status
```
GET /api/v1/network/status
```

**Response:**
```json
{
  "status": "operational",
  "mainnet": {
    "isLive": true,
    "blockHeight": 1234567,
    "tps": 950000,
    "averageFinality": 0.4
  },
  "network": {
    "loadPercentage": 23,
    "gasEfficiency": 98,
    "uptime": 99.99
  }
}
```

#### Get Performance Metrics
```
GET /api/v1/network/metrics
```

**Response:**
```json
{
  "transactionsPerSecond": 1000000,
  "readWriteSpeed": 100,
  "transactionCost": 0.001,
  "networkUptime": 99.99,
  "activeValidators": 128,
  "totalTransactions": 50000000000
}
```

### Blockchain Data

#### Get Latest Blocks
```
GET /api/v1/blocks?limit=10&offset=0
```

**Response:**
```json
{
  "blocks": [
    {
      "number": 1234567,
      "hash": "0x...",
      "timestamp": 1698765432,
      "transactions": 1500,
      "gasUsed": 21000000,
      "validator": "0x..."
    }
  ],
  "total": 1234567,
  "limit": 10,
  "offset": 0
}
```

#### Get Transaction Details
```
GET /api/v1/transactions/:hash
```

**Response:**
```json
{
  "hash": "0x...",
  "from": "0x...",
  "to": "0x...",
  "value": "1000000000000000000",
  "gasUsed": 21000,
  "gasPrice": "1000000000",
  "blockNumber": 1234567,
  "timestamp": 1698765432,
  "status": "success"
}
```

### Developer Resources

#### Get RPC Endpoints
```
GET /api/v1/developer/rpc-endpoints
```

**Response:**
```json
{
  "mainnet": {
    "http": "https://rpc.reverie.network",
    "websocket": "wss://ws.reverie.network",
    "chainId": 1,
    "networkId": 1
  },
  "testnet": {
    "http": "https://testnet-rpc.reverie.network",
    "websocket": "wss://testnet-ws.reverie.network",
    "chainId": 2,
    "networkId": 2
  }
}
```

#### Get Contract Addresses
```
GET /api/v1/developer/contracts
```

**Response:**
```json
{
  "mainnet": {
    "token": "0x...",
    "bridge": "0x...",
    "staking": "0x...",
    "governance": "0x..."
  }
}
```

### Ecosystem

#### Get Metaverse Browser Info
```
GET /api/v1/ecosystem/browser
```

**Response:**
```json
{
  "version": "1.0.0",
  "features": [
    "Avatar Creator",
    "Profile Management",
    "Event Discovery",
    "Cross-world Travel"
  ],
  "supportedPlatforms": ["web", "desktop", "mobile"]
}
```

#### Get Creator Playground Status
```
GET /api/v1/ecosystem/playground
```

**Response:**
```json
{
  "activeCreators": 15000,
  "publishedExperiences": 50000,
  "toolsAvailable": [
    "3D Builder",
    "Script Editor",
    "Asset Library",
    "Publishing Tools"
  ]
}
```

## Authentication

Future API endpoints will require authentication via Bearer tokens:

```
Authorization: Bearer <token>
```

### Get API Token
```
POST /api/v1/auth/token
Content-Type: application/json

{
  "apiKey": "your-api-key",
  "secret": "your-secret"
}
```

**Response:**
```json
{
  "token": "eyJ...",
  "expiresIn": 3600,
  "type": "Bearer"
}
```

## Rate Limiting

All API endpoints will be rate limited:
- **Free tier**: 100 requests per minute
- **Developer tier**: 1000 requests per minute
- **Enterprise tier**: Unlimited

**Rate Limit Headers:**
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1698765432
```

## Error Responses

### Standard Error Format
```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request parameters are invalid",
    "details": {
      "field": "limit",
      "issue": "Must be between 1 and 100"
    }
  }
}
```

### Error Codes

- `INVALID_REQUEST` (400): Invalid request parameters
- `UNAUTHORIZED` (401): Invalid or missing authentication
- `FORBIDDEN` (403): Insufficient permissions
- `NOT_FOUND` (404): Resource not found
- `RATE_LIMIT_EXCEEDED` (429): Too many requests
- `INTERNAL_ERROR` (500): Server error
- `SERVICE_UNAVAILABLE` (503): Service temporarily unavailable

## Webhooks

### Available Events

Subscribe to network events:

- `block.created`: New block mined
- `transaction.confirmed`: Transaction confirmed
- `validator.status_changed`: Validator status update
- `network.upgrade`: Network upgrade notification

### Webhook Payload Example

```json
{
  "event": "block.created",
  "timestamp": 1698765432,
  "data": {
    "blockNumber": 1234567,
    "hash": "0x...",
    "transactions": 1500
  }
}
```

## SDKs

### JavaScript/TypeScript
```bash
npm install @reverie/sdk
```

```typescript
import { ReverieClient } from '@reverie/sdk';

const client = new ReverieClient({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

const status = await client.network.getStatus();
```

### Python
```bash
pip install reverie-sdk
```

```python
from reverie import ReverieClient

client = ReverieClient(
    api_key='your-api-key',
    network='mainnet'
)

status = client.network.get_status()
```

## WebSocket API

### Connect to Real-Time Updates

```javascript
const ws = new WebSocket('wss://ws.reverie.network');

ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'subscribe',
    channels: ['blocks', 'transactions']
  }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('New event:', data);
};
```

### WebSocket Events

- `block`: New block created
- `transaction`: New transaction
- `network`: Network status update

## GraphQL API (Future)

### Endpoint
```
POST https://graphql.reverie.network
```

### Example Query
```graphql
query {
  network {
    status
    metrics {
      tps
      blockHeight
      validators
    }
  }
  blocks(limit: 10) {
    number
    hash
    transactions
  }
}
```

## Support

For API support:
- Documentation: https://docs.reverie.network
- Discord: https://discord.gg/reverie
- Email: api-support@reverie.network

## Changelog

### Version 1.0.0 (Future)
- Initial API release
- Network status endpoints
- Block and transaction queries
- Developer resource endpoints
