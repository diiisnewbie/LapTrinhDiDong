import { Book } from "./bai6";
import { User } from "./bai7";
export class Library{
    books : Book[] = [];
    users : User[] = [];

    public addBook(book: Book): void{
        this.books.push(book);
        console.log("Add book successfully");
    }

    public addUser(user: User): void{
        this.users.push(user);
        console.log("Add user successfully");
    }

    public getUser(){
        return this.users;
    }

    public getBook(){
        return this.books;
    }
}