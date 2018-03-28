import {categoryVM} from '../models/CategoryVM';
import {EditorVM} from '../models/EditorVM';
import {AuthorVM} from '../models/authorVM';
import {BookVM} from '../models/bookVM';
import {BackendService} from '../service/backend.service';
import {DatashareService} from '../service/datashare.service';
import {MessageService} from '../service/message.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgSelectOption} from '@angular/forms';

@Component({
  selector: 'app-createlivre',
  templateUrl: './createlivre.component.html',
  styleUrls: ['./createlivre.component.css']
})
export class CreatelivreComponent implements OnInit {
  bookVM: BookVM = {
    isbn: null,
    book_title: '',
    book_description: '',
    book_price: null,
    publication_date: '',
    image_path: '0.png',
    popular_book: false,
    author_lastname: '',
    author_firstname: '',
    listCopy: null,
    editor_name: null,
  category_name: null,

    book_authorId: null,
    book_editorId: null,
    book_categoryId: null
  };

  authorVM: AuthorVM = {
    author_id: null,
    author_lastname: '',
    author_firstname: ''
  };

  editorVM: EditorVM = {
    editor_id: null,
    editor_name: '',
    editor_address: ''
  };

  categoryVM: categoryVM = {
    category_id: null,
    category_name: '',
    category_description: ''
  };

  listAuthor: any;
  listEditor: any;
  listCategory: any;

  constructor(private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router) {}

  ngOnInit() {
    this.getAuthor();
    this.getCategory();
    this.getEditor();
  }

  addBook() {
    console.log('bookDTO');
    console.log(this.bookVM);
    this.backService.addBooks(this.bookVM).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          this.router.navigate(['/books']);
        }
      },
      error => {
        console.error(error.message);
      }

    );
  }

  getAuthor(): any {
    this.backService.getAuthor().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log('data payload');
          this.listAuthor = data.payload;
          return this.listAuthor;
        }
      },
      error => {
        console.error(error.message);
         this.messageService.displayErrorMessage(error.message);
        return null;
      }
    );
  }

  getEditor(): any {
    this.backService.getEditor().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log('data payload');
          this.listEditor = data.payload;
          return this.listEditor;
        }
      },
      error => {
        console.error(error.message);
          this.messageService.displayErrorMessage(error.message);
        return null;
      }
    );
  }

  getCategory(): any {
    this.backService.getCategory().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log('data payload');
          this.listCategory = data.payload;
          return this.listCategory;
        }
      },
      error => {
        console.error(error.message);
         this.messageService.displayErrorMessage(error.message);
        return null;
      }
    );
  }
}
