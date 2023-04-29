import { Injectable } from "@angular/core";

@Injectable()

export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name : 'Clean code',
        author : 'robert c martin',
        image : '/assets/images/book-1.jpg',
        amount : 48.99,
      },
      {
        name : 'Pragmatic Programmer',
        author : 'David Thomas',
        image : '/assets/images/book-2.jpg',
        amount : 42.99,
      },
      {
        name : 'The Hidden Language of Computer Hardware and Software',
        author : 'Charlez Petzold',
        image : '/assets/images/book-3.jpg',
        amount : 35.99,
      },
      {
        name : 'C++: 2 books in 1 - The Ultimate Beginners Guide to Master',
        author : 'Mark Reed',
        image : '/assets/images/book-4.jpg',
        amount : 24.99,
      },
      {
        name : 'Python Programming for Beginners',
        author : 'Amz Press',
        image : '/assets/images/book-5.jpg',
        amount : 22.99,
      },
    ]
  }
}