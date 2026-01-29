# Book Library - React Frontend

React frontend for the Book Library workshop.

## Quick Start

```bash
npm install
npm run dev
```

The app will run on `http://localhost:5173`

**Make sure the Rails API is running on port 3001!**

## Project Structure

```
src/
├── components/          # React components
│   ├── BookCard.tsx    # Displays a single book
│   ├── FilterBar.tsx   # Genre filter UI
│   └── BookList.tsx    # Main list component
├── hooks/              # Custom hooks
│   └── useFetch.ts     # Reusable data fetching
├── types/              # TypeScript interfaces
│   └── Book.ts         # Book interface
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Key Concepts Demonstrated

### 1. Custom Hooks
```typescript
// hooks/useFetch.ts
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch logic
  }, [url]);

  return { data, loading, error };
}
```

### 2. Component Composition
```typescript
// Small, focused components
<FilterBar 
  genres={genres}
  selectedGenre={selectedGenre}
  onGenreChange={setSelectedGenre}
/>

{filteredBooks.map(book => (
  <BookCard key={book.id} {...book} />
))}
```

### 3. Client-Side Filtering
```typescript
// No server request needed!
const filteredBooks = useMemo(() => {
  if (!selectedGenre) return books;
  return books.filter(book => book.genre === selectedGenre);
}, [books, selectedGenre]);
```

## Development

### Running the App
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

### Type Checking
```bash
npx tsc --noEmit
```

## Environment

- **Node**: 18+
- **React**: 18.2
- **TypeScript**: 5.2
- **Vite**: 5.0

## API Configuration

The app is configured to proxy `/api/*` requests to `http://localhost:3001`.

See `vite.config.ts` for details.
