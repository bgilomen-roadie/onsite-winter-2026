import { useState, useMemo } from 'react';
import { Book } from '../types/Book';

interface UseBookSearchReturn {
  query: string;
  setQuery: (query: string) => void;
  results: Book[];
  isSearching: boolean;
  resultCount: number;
}

/**
 * useBookSearch - Custom hook for searching books
 * 
 * This hook encapsulates all the search logic:
 * - Manages the search query state
 * - Filters books based on the query
 * - Provides search status
 * 
 * @param books - Array of books to search through (can be null while loading)
 * @returns Search state and filtered results
 */
export function useBookSearch(books: Book[] | null): UseBookSearchReturn {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!books) return [];
    if (!query.trim()) return books;
    
    const searchTerm = query.toLowerCase();
    return books.filter(book => 
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
  }, [books, query]);

  const isSearching = query.trim().length > 0;

  return {
    query,
    setQuery,
    results,
    isSearching,
    resultCount: results.length
  };
}
