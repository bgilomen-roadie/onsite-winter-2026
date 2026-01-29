import { useState, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useBookSearch } from '../hooks/useBookSearch';
import { Book } from '../types/Book';
import { BookCard } from './BookCard';
import { FilterBar } from './FilterBar';
import { SearchBar } from './SearchBar';

/**
 * BookList Component
 * 
 * This component demonstrates using multiple custom hooks together:
 * - useFetch: Handles data fetching from the API
 * - useBookSearch: Handles search state and filtering
 * 
 * Plus local state for genre filtering with useMemo.
 */
export function BookList() {
  // Data fetching via custom hook
  const { data: books, loading, error } = useFetch<Book[]>('/api/books');
  
  // Search functionality via custom hook
  const { query, setQuery, results: searchResults, isSearching } = useBookSearch(books);
  
  // Genre filter state
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // Extract unique genres from books
  const genres = useMemo(() => {
    if (!books) return [];
    return [...new Set(books.map(book => book.genre))].sort();
  }, [books]);

  // Apply genre filter to search results
  const filteredBooks = useMemo(() => {
    if (!selectedGenre) return searchResults;
    return searchResults.filter(book => book.genre === selectedGenre);
  }, [searchResults, selectedGenre]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading books...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error loading books: {error}</p>
        <p>Make sure the Rails API is running on port 3001</p>
      </div>
    );
  }

  if (!books || books.length === 0) {
    return (
      <div className="empty">
        <p>No books found. Run `rails db:seed` to add sample data.</p>
      </div>
    );
  }

  return (
    <div>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        resultCount={filteredBooks.length}
        totalCount={books.length}
        isSearching={isSearching || selectedGenre !== null}
      />
      
      <FilterBar
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      
      <div className="stats">
        Showing {filteredBooks.length} of {books.length} books
        {isSearching && ` matching "${query}"`}
        {selectedGenre && ` in ${selectedGenre}`}
      </div>
      
      {filteredBooks.length === 0 ? (
        <div className="empty">
          <p>No books match your search criteria.</p>
        </div>
      ) : (
        <div className="book-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
