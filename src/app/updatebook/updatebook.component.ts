import {categoryVM} from '../models/CategoryVM';
import {EditorVM} from '../models/EditorVM';
import {AuthorVM} from '../models/authorVM';
import {BookVM} from '../models/bookVM';
import {BackendService} from '../service/backend.service';
import {DatashareService} from '../service/datashare.service';
import {MessageService} from '../service/message.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgSelectOption} from '@angular/forms';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  id: number;
  sub: any;
  bookVM: BookVM;

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
    private router: Router,
    private route: ActivatedRoute) {


    this.sub = this.route
      .queryParams
      .subscribe(params => {
        console.log(typeof (+params.id));
        this.id = +params.id;
        console.log(this.id);
      });
    this.getAuthor();
    this.getCategory();
    this.getEditor();
    this.getBookById(this.id);

    console.log(this.bookVM);

  }





  ngOnInit() {
  }

  updateBook() {
    this.backService.updateBook(this.bookVM).subscribe(
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

  getBookById(id): BookVM {
    this.backService.getBookById(id).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          this.bookVM = data.payload;
        }
      },
      error => {
        console.error(error.message);
        return null;
      }
    );
    return null;
  }

  getAuthor(): any {
    this.backService.getAuthor().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
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
          this.listEditor = data.payload;
          return this.listEditor;
        }
      },
      error => {
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
