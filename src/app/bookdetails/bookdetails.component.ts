import {BookVM} from '../models/bookVM';
import {ParamMap, ActivatedRoute, Router} from '@angular/router';
import {MemberVM} from '../models/memberVM';
import {Component, OnInit} from '@angular/core';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {CommonModule} from '@angular/common';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

export class BookdetailsComponent implements OnInit {

  bookVM: BookVM;

  listResult: any;
  id: any;
  sub: Subscription;

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

    this.listResult = this.getBookById(this.id);
  }

  ngOnInit() {}


  getBookById(id): any {
    this.backService.getBookById(id).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          this.bookVM = data.payload;
          //return this.listResult;
        }
      },
      error => {
        console.error(error.message);
        return null;
      }
    );
  }

}
