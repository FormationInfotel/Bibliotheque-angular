import {ParamMap, ActivatedRoute, Router} from '@angular/router';
import {MemberVM} from '../models/memberVM';
import {Component, OnInit} from '@angular/core';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {CommonModule} from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})



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

  listResult: null;

  sub: Subscription;

  memberVM: MemberVM = {

  member_id: null,
  member_lastname: null,
  member_firstname: null,
  member_email: null,
  member_address: null,
  member_password: null,
  isMemberAdmin: null,
  member_LibraryId: null,

};

  listeMembres: any;

  id: any;
  constructor(
    private backService: BackendService,
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

    this.bookVM = this.getBookById(this.id);
  }

  ngOnInit() {

     this.listeMembres = this.getMembre();
    console.log('listeLivresRecom');
    console.log(this.listeMembres);
  }

  getBookById(id): any {
    this.backService.getBookById(id).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          this.listResult = data.payload;
          return this.listResult;
        }
      },
      error => {
        console.error(error.message);
        return null;
      }
    );
  }

}
