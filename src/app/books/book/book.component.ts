import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../types/book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book = {} as Book;


  constructor(private cartService : CartService) {}

  ngOnInit():void {

  }

  isInCart:boolean = false;


  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book) 
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book)
  }

}
