interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  resultCount?: number;
  totalCount?: number;
  isSearching?: boolean;
}

/**
 * SearchBar Component
 * 
 * A reusable search input with result count display.
 * Receives all state from parent via props (controlled component pattern).
 */
export function SearchBar({ 
  query, 
  onQueryChange, 
  resultCount, 
  totalCount,
  isSearching 
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="search-input"
      />
      {isSearching && resultCount !== undefined && totalCount !== undefined && (
        <span className="search-status">
          Found {resultCount} of {totalCount} books
        </span>
      )}
    </div>
  );
}
