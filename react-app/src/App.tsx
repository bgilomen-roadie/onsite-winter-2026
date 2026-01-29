import { BookList } from './components/BookList'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>📚 Book Library</h1>
        <p>React Workshop for Rails Engineers</p>
      </header>
      <main className="main">
        <BookList />
      </main>
    </div>
  )
}

export default App
