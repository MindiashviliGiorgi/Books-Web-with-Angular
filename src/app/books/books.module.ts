import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from '../header/header.component';
import { CartComponent } from '../cart/cart.component';



@NgModule({
  declarations: [BookComponent, BooksComponent],
  providers: [BooksService],
  imports: [CommonModule],
  exports: [BooksComponent],
})

export class BooksModule {}
