import { Book } from '../types/Book';

interface BookCardProps {
  book: Book;
}

/**
 * BookCard Component
 * 
 * This is like a Rails partial (_book.html.erb).
 * It receives data as props (like locals in a partial).
 * 
 * Rails equivalent:
 * <%= render partial: 'book', locals: { book: @book } %>
 */
export function BookCard({ book }: BookCardProps) {
  return (
    <article className="book-card">
      <h3>{book.title}</h3>
      <p className="author">by {book.author}</p>
      <div className="meta">
        <span className="genre">{book.genre}</span>
        <span className="year">{book.year}</span>
      </div>
    </article>
  );
}
