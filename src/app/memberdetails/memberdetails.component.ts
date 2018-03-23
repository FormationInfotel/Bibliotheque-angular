import {MemberVM} from '../models/memberVM';
import {Component, OnInit} from '@angular/core';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonModule} from '@angular/common';


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

  listeMembres: any;
  id: any;
  sub: any;

  constructor(
    private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.sub = this.activatedRoute
      .queryParams
      .subscribe(params => {
        console.log(params['id']);
        this.id = +params['id'];
      });
    console.log('ID=====apres======');
    console.log(this.id);

    this.listeMembres = this.getMembre();
    console.log('listeMembres');
    console.log(this.listeMembres);
  }

  getMembre(): any {
    this.backService.getMembre().subscribe(
      data => {
        console.log('data');
        console.log(data);
        this.backService.handleData(data);
        if (data.payload) {
          this.listeMembres = data.payload;
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
