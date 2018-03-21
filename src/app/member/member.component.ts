import {Component, OnInit} from '@angular/core';
import {IdentifiantsVM} from '../models/identifiantsVM';
import {MemberVM} from '../models/memberVM';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  memberVM: MemberVM = {
    member_id: null,
    member_lastname: '',
    member_firstname: '',
    member_email: '',
    member_address: '',
    member_password: '',
    isMemberAdmin: false,
    member_LibraryId: null
  };

  constructor(private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router) {}

  ngOnInit() {
    this.getMember();
  }


   getMember() {
    this.backService.getMember().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          // cache the logged member in datashare service
          // this.dss.loggedMember = data.payload;
          // navigate to home and display navbar or the hidden tabs
          // this.router.navigate(['/member']);

        }
      },
      error => {
        console.error(error.message);
        // messageService.displayFailureMessage(error.message);
      }

    );
  }

}
