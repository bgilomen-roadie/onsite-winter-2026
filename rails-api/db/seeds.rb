# Clear existing data
Book.destroy_all

# Seed books
books = [
  # Technical Books
  { title: "The Pragmatic Programmer", author: "Hunt & Thomas", genre: "Technical", year: 1999 },
  { title: "Clean Code", author: "Robert Martin", genre: "Technical", year: 2008 },
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", genre: "Technical", year: 2017 },
  { title: "Refactoring", author: "Martin Fowler", genre: "Technical", year: 1999 },
  { title: "Domain-Driven Design", author: "Eric Evans", genre: "Technical", year: 2003 },
  { title: "Structure and Interpretation of Computer Programs", author: "Abelson & Sussman", genre: "Technical", year: 1985 },
  { title: "Introduction to Algorithms", author: "Cormen et al.", genre: "Technical", year: 1990 },
  { title: "Code Complete", author: "Steve McConnell", genre: "Technical", year: 1993 },
  
  # Fiction
  { title: "The Phoenix Project", author: "Gene Kim", genre: "Fiction", year: 2013 },
  { title: "The Unicorn Project", author: "Gene Kim", genre: "Fiction", year: 2019 },
  { title: "Cryptonomicon", author: "Neal Stephenson", genre: "Fiction", year: 1999 },
  { title: "Snow Crash", author: "Neal Stephenson", genre: "Fiction", year: 1992 },
  { title: "Ready Player One", author: "Ernest Cline", genre: "Fiction", year: 2011 },
  
  # Business
  { title: "The Lean Startup", author: "Eric Ries", genre: "Business", year: 2011 },
  { title: "Zero to One", author: "Peter Thiel", genre: "Business", year: 2014 },
  { title: "Good to Great", author: "Jim Collins", genre: "Business", year: 2001 },
  { title: "The Innovator's Dilemma", author: "Clayton Christensen", genre: "Business", year: 1997 },
  
  # DevOps
  { title: "Site Reliability Engineering", author: "Google SRE Team", genre: "DevOps", year: 2016 },
  { title: "The DevOps Handbook", author: "Kim et al.", genre: "DevOps", year: 2016 },
  { title: "Accelerate", author: "Forsgren et al.", genre: "DevOps", year: 2018 },
  { title: "Continuous Delivery", author: "Humble & Farley", genre: "DevOps", year: 2010 }
]

books.each do |book_attrs|
  Book.create!(book_attrs)
end

puts "Created #{Book.count} books"
puts "Genres: #{Book.distinct.pluck(:genre).join(', ')}"
