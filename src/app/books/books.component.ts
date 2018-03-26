import {AuthorVM} from '../models/authorVM';
import {Component, OnInit} from '@angular/core';
import {BookVM} from '../models/bookVM';
import {BookCopyVM} from '../models/BookCopyVM';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookVM: BookVM;
  listeBook: any;

  constructor(
    private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): any {
    this.backService.getBooks().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          this.listeBook = data.payload;
          return this.listeBook;
        }
      },
      error => {
        console.log('error !!!!!');
        console.error(error.message);
        return null;
      }
    );
  }

}
