class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.id = String(description.length + title.length + author.length)
    }
}

class Library {
    constructor() {
        this.books = []
    }

    addBook(bookInfo) {
        let book = new Book(bookInfo['title'], bookInfo['description'], bookInfo['author'])
        this.books.push(book)

        return book
    }

    getBooks() {
        return this.books
    }

    removeBookById(id) {
        let cond = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i]['id'] === id) {
                this.books.splice(i, 1);
                cond = true;
                break
            } 
        }
        if (cond === false) {
            console.log('Livro não encontrado')
        }
    }

    getBookById(id) {
        let cond = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i]['id'] === id) {
                cond = true;
                return this.books[i]
            } 
        }
        if (cond === false) {
            console.log('Livro não encontrado')
        }
    }

    updateBookById(id, info) {
        let cond = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i]['id'] === id) {
                this.books[i]['title'] = info['title'];
                this.books[i]['description'] = info['description'];
                this.books[i]['author'] = info['author'];
                
                cond = true;
                return this.books[i]
            }
        } 
        if (cond === false) {
            console.log('Livro não encontrado')
        }
    }
}

// Casos de teste

// const p1 = new Library()

// p1.addBook({title: 'Terra', description: 'Solo', author: 'Vitor'})
// p1.addBook({title: 'Sol', description: 'Chamas', author: 'João'})
// p1.addBook({title: 'Lua', description: 'Noite', author: 'Lucas Gabriel'})

// console.log(p1.getBooks())
// console.log()

// p1.removeBookById('7')
// p1.getBookById('7')

// console.log(p1.getBooks())
// console.log()

// p1.updateBookById('8', {title: 'Terra', description: 'Solo', author: 'Vitor'})

// console.log(p1.getBooks())
