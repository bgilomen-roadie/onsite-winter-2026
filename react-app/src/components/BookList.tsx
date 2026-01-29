import { useState, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Book } from '../types/Book';
import { BookCard } from './BookCard';
import { FilterBar } from './FilterBar';

/**
 * BookList Component
 * 
 * This is like a Rails controller action + view combined.
 * 
 * Rails equivalent:
 * 
 * class BooksController < ApplicationController
 *   def index
 *     @books = Book.all
 *     @genres = Book.distinct.pluck(:genre)
 *     @selected_genre = params[:genre]
 *     @filtered_books = @selected_genre ? @books.where(genre: @selected_genre) : @books
 *   end
 * end
 * 
 * Key differences:
 * 1. Data fetching happens AFTER initial render (useEffect)
 * 2. State lives in the component (useState), not request/session
 * 3. Filtering is instant - no HTTP request needed (useMemo)
 */
export function BookList() {
  // Custom hook for data fetching - like a service object
  const { data: books, loading, error } = useFetch<Book[]>('/api/books');
  
  // Local state for filter - like params[:genre] but persists across renders
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // Extract unique genres from books
  // useMemo caches this calculation - only recalculates when books change
  const genres = useMemo(() => {
    if (!books) return [];
    return [...new Set(books.map(book => book.genre))].sort();
  }, [books]);

  // Filter books by selected genre
  // This is CLIENT-SIDE filtering - no HTTP request needed!
  // In Rails, this would require a new page load
  const filteredBooks = useMemo(() => {
    if (!books) return [];
    if (!selectedGenre) return books;
    return books.filter(book => book.genre === selectedGenre);
  }, [books, selectedGenre]);

  // Handle loading state
  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading books...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="error">
        <p>Error loading books: {error}</p>
        <p>Make sure the Rails API is running on port 3001</p>
      </div>
    );
  }

  // Handle empty state
  if (!books || books.length === 0) {
    return (
      <div className="empty">
        <p>No books found. Run `rails db:seed` to add sample data.</p>
      </div>
    );
  }

  // Main render - composition of smaller components
  return (
    <div>
      <FilterBar
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      
      <div className="stats">
        Showing {filteredBooks.length} of {books.length} books
      </div>
      
      <div className="book-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
