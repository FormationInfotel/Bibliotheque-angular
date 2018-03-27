import {BookVM} from '../models/bookVM';
import {Component, OnInit} from '@angular/core';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {Router, ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {forEachChild} from 'typescript';
import {NgSelectOption} from '@angular/forms';

@Component({
  selector: 'app-bookcrud',
  templateUrl: './bookcrud.component.html',
  styleUrls: ['./bookcrud.component.css']
})

export class BookcrudComponent implements OnInit {

  bookVM: BookVM = {
    isbn: null,
    book_title: '',
    book_description: '',
    book_price: null,
    publication_date: '',
    image_path: '',
    popular_book: false,
    author_lastname: '',
    author_firstname: '',
    editor_name: null,
    category_name: null,

    book_authorId: null,
    book_editorId: null,
    book_categoryId: null,
    listCopy: null
  };

  listeBook: any;


  constructor(private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getBooks();
  }

  createBook() {
    this.router.navigate(['/createbook']);
  }

  getBooks(): any {
    this.backService.getBooks().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          this.listeBook = data.payload;
          return this.listeBook;
        }
      },

      error => {
        console.error(error.message);
        return null;
      }
    );
  }

  deleteBook(id) {
    this.backService.deleteBook(id).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          this.router.navigate(['/book']);
        }
      },
      error => {
        console.error(error.message);
      }
    );
  }
}
