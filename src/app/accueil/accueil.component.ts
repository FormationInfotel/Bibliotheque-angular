import {AuthorVM} from '../models/authorVM';
import {Component, OnInit} from '@angular/core';
import {BookVM} from '../models/bookVM';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

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



  listeLivresRecom: any;


  constructor(
    private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router) {}

  ngOnInit() {

    this.listeLivresRecom = this.getRecommendedBooks();
   // this.auteur
    console.log('listeLivresRecom');
    console.log(this.listeLivresRecom);
  }

  getRecommendedBooks(): any {
    this.backService.getRecommendedBooks().subscribe(
      data => {
        console.log('data');
        console.log(data);
        this.backService.handleData(data);
        if (data.payload) {
          this.listeLivresRecom = data.payload;
          console.log('data payload');
          console.log(data.payload);
          return data.payload;
        }
      },
      error => {
        console.log('error !!!!!');
        console.error(error.message);
        this.messageService.displayErrorMessage(error.message);
      }
    );

  }

}
