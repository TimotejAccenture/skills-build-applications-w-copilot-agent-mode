# OctoFit Tracker Backend

Node.js + Express + TypeScript backend for the OctoFit Tracker application.

## Setup

Install dependencies:
```bash
npm install
```

## Development

Run in development mode:
```bash
npm run dev
```

## Build

Build TypeScript to JavaScript:
```bash
npm run build
```

## Start

Start the production server:
```bash
npm start
```

## Configuration

Create a `.env` file with:
```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
```

## API

- Health check: `GET /health`
- API endpoint: `GET /api`
