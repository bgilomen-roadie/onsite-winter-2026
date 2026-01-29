# Book Library - Rails API

A simple Rails API backend for the React workshop.

## Prerequisites

- Ruby 3.0+
- PostgreSQL 14+

## Quick Start

```bash
# Install dependencies
bundle install

# Create database and run migrations
rails db:create db:migrate db:seed

# Start server on port 3001
rails server -p 3001
```

The API will run on `http://localhost:3001`

## Database Configuration

By default, the app connects to PostgreSQL on localhost. You can customize the connection using environment variables:

```bash
export POSTGRES_USER=your_username
export POSTGRES_PASSWORD=your_password
export POSTGRES_HOST=localhost
```

Or create a `.env` file in the project root.

## Endpoints

### GET /api/books

Returns all books.

```json
[
  {
    "id": 1,
    "title": "The Pragmatic Programmer",
    "author": "Hunt & Thomas",
    "genre": "Technical",
    "year": 1999
  }
]
```

### GET /api/books?genre=Technical

Filter books by genre.

### GET /api/books/:id

Get a single book.

### GET /api/genres

Get list of unique genres.

```json
["Technical", "Fiction", "Business", "DevOps"]
```

## Database

Uses PostgreSQL. The seed file creates 21 sample books across 4 genres.

## CORS

CORS is configured to allow all origins for development purposes.
