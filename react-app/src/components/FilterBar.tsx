interface FilterBarProps {
  genres: string[];
  selectedGenre: string | null;
  onGenreChange: (genre: string | null) => void;
}

/**
 * FilterBar Component
 * 
 * Handles genre filtering.
 * 
 * Key difference from Rails:
 * - In Rails, clicking a filter submits a form/link → new HTTP request → new page render
 * - In React, clicking updates state → instant re-render → no HTTP request
 * 
 * This is client-side filtering! The data is already in memory.
 */
export function FilterBar({ genres, selectedGenre, onGenreChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <button
        className={`filter-btn ${selectedGenre === null ? 'active' : ''}`}
        onClick={() => onGenreChange(null)}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          className={`filter-btn ${selectedGenre === genre ? 'active' : ''}`}
          onClick={() => onGenreChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
