import {Component, OnInit} from '@angular/core';
import {IdentifiantsVM} from '../models/identifiantsVM';
import {LibraryVM} from '../models/libraryVM';
import {MemberVM} from '../models/memberVM';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {forEachChild} from 'typescript';
import {NgSelectOption} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  memberVM: MemberVM = {
    member_id: null,
    member_lastname: '',
    member_firstname: '',
    member_email: '',
    member_address: '',
    member_password: '',
    isMemberAdmin: false,
    member_LibraryId: null,
    library_name: ''
  };

  libraryVM: LibraryVM = {
    library_code: null,
    library_name: '',
    library_address: ''
  };


  listeLibrary: any;

  constructor(private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router) {}

  ngOnInit() {
    console.log('getLibrary');
    this.getLibraries();
    console.log(this.getLibraries());
  }


  newMember() {
    this.backService.newMember(this.memberVM).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          this.router.navigate(['/accueil']);
        }
      },
      error => {
        console.error(error.message);
      }

    );
  }

  getLibraries(): any {
    this.backService.getLibrary().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log('data payload');
          this.listeLibrary = data.payload;
          return this.listeLibrary;
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
