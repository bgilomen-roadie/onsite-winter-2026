# Book Library - Rails API

A simple Rails API backend for the React workshop.

## Quick Start

```bash
bundle install
rails db:create db:migrate db:seed
rails server -p 3001
```

The API will run on `http://localhost:3001`

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

Uses SQLite for simplicity. The seed file creates 21 sample books across 4 genres.

## CORS

CORS is configured to allow all origins for development purposes.
