import {ParamMap, ActivatedRoute, Router} from '@angular/router';
import {BookVM} from '../models/bookVM';
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
  sub: Subscription;

  id: any;
  constructor(backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router,
    private route: ActivatedRoute) {

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        console.log(params['id']);
        this.id = +params['id'];
      });
    console.log('ID=====apres======');
    console.log(this.id);
  }

  ngOnInit() {
  }

}
