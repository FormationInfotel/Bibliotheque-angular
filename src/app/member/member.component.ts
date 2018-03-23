import {Component, OnInit} from '@angular/core';
import {IdentifiantsVM} from '../models/identifiantsVM';
import {MemberVM} from '../models/memberVM';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {Router, ActivatedRoute} from '@angular/router';

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

  listeMembers: any;

  constructor(private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getMembers();
  }

    createMember() {
    this.router.navigate(['/createmember']);
  }


     getMembers(): any {
    this.backService.getMembers().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          this.listeMembers = data.payload;
          return this.listeMembers;
        }
      },
      error => {
        console.log('error !!!!!');
        console.error(error.message);
         this.messageService.displayErrorMessage(error.message);
        return null;
      }
    );
  }

}
