import {MemberVM} from '../models/memberVM';
import {Component, OnInit} from '@angular/core';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-memberdetails',
  templateUrl: './memberdetails.component.html',
  styleUrls: ['./memberdetails.component.css']
})

export class MemberdetailsComponent implements OnInit {

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

  id: any;
  listeMembres: null;
  sub: Subscription;



  constructor(
    private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

   this.sub = this.activatedRoute
      .queryParams
      .subscribe(params => {
        console.log(typeof (+params.id));
        this.id = + params.id;
        console.log(this.id);
      });

    this.memberVM = this.getMembre(this.id);
  }

  ngOnInit() {}



  getMembre(id): any {
    this.backService.getMembre(id).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          this.listeMembres = data.payload;
          return this.listeMembres;
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
