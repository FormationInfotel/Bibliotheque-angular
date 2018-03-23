import {BookVM} from '../models/bookVM';
import {BorrowVM} from '../models/borrowVM';
import {Component, OnInit} from '@angular/core';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-borrowvalidation',
  templateUrl: './borrowvalidation.component.html',
  styleUrls: ['./borrowvalidation.component.css']
})
export class BorrowvalidationComponent implements OnInit {

  borrowVM: BorrowVM = {
    borrow_date: null,
    return_date: null,
    borrow_memberId: null,
    member_firstname: null,
    member_lastname: null,
    borrow_listCopyId: null,
    isValidated: null,
  };

  bookVM: BookVM = {
    ISBN: null,
    book_title: null,
    book_description: null,
    book_price: null,
    publication_date: null,
    image_path: null,
    popular_book: null,
    author_lastname: null,
    author_firstname: null,

    book_authorId: null,
    book_editorId: null,
    book_categoryId: null,

  };

  listeBorrow: any;
  listeLivres: any;

  constructor(private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router) {}

  ngOnInit() {
    this.getBorrows();
    this.getBooks();
  }


  getBorrows(): any {
    this.backService.getBorrows().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          this.listeBorrow = data.payload;
          return this.listeBorrow;
        }
      },
      error => {
        console.log('error !!!!!');
        console.error(error.message);
        this.messageService.displayErrorMessage(error.message);
        return null;
      }
    );
  }

  getBooks(): any {
    this.backService.getBooks().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          this.getBooks = data.payload;
          return this.listeBorrow;
        }
      },
      error => {
        console.log('error !!!!!');
        console.error(error.message);
        this.messageService.displayErrorMessage(error.message);
        return null;
      }
    );
  }

}
