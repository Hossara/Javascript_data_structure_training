const books = ['book1', 'book2', 'book3']

for (const book of books) console.log(book)

books.push('book4')

console.log(books.length)

console.log(books.findIndex((item) => item === 'book2'))