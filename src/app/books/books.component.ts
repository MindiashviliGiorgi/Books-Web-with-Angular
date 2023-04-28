import { Component } from '@angular/core';

interface Book {
  name: string;
  author: string;
  image: string;
  amount: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  constructor() {}

  ngOnInit(): void {}

  books: Book[] = [
    {
      name : 'Clean code',
      author : 'robert c martin',
      image : '/assets/images/book-1.jpg',
      amount : 700,
    },
    {
      name : 'Pragmatic Programmer',
      author : 'David Thomas',
      image : '/assets/images/book-2.jpg',
      amount : 800,
    }
  ]


  // isDisabled: boolean = false;

  // handleClick(){
  //   this.isDisabled = true;
  // }

  myName: string = '';


  isShowing: boolean = true;



}
