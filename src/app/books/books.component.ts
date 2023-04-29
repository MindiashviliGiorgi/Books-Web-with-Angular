import { Component } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  constructor(private booksService: BooksService) {
  
  }
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
  books: Book[] = [];

  myName: string = '';

  isShowing: boolean = true;

}
