"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log("Add book successfully");
    }
    addUser(user) {
        this.users.push(user);
        console.log("Add user successfully");
    }
    getUser() {
        return this.users;
    }
    getBook() {
        return this.books;
    }
}
exports.Library = Library;
