class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = []
    }

    addBook(bookInfo, id) {
        let book = new Book(bookInfo[0], bookInfo[1], bookInfo[2])
        book['id'] = id
        this.books.push(book)

        return book
    }

    getBooks() {
        return this.books
    }

    removeBookById(id) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i]['id'] === id) {
                this.books.splice(i, 1);

                return this.books[i]
            }
        }
    }

    getBookById(id) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i]['id'] === id) {
                console.log(this.books[i])
                return this.books[i]
            }
        }
    }

    updateBookById(id, info) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i]['id'] === id) {
                this.books[i]['title'] = info[0];
                this.books[i]['description'] = info[1];
                this.books[i]['author'] = info[2];

                return this.books[i]
            }
        }
    }
}

const p1 = new Library()

p1.addBook(['haha', 'olaa', 'vitor'], 123)
p1.addBook(['haha', 'olaa', 'vitor'], 453)
p1.addBook(['haha', 'olaa', 'vitor'], 321)

p1.updateBookById(123, ['O amanhecer', 'Fala sobre o Sol', 'Jonas'])

console.log()

console.log(p1.getBooks())
