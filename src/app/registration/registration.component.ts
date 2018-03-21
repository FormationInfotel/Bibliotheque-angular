import {Component, OnInit} from '@angular/core';
import {IdentifiantsVM} from '../models/identifiantsVM';
import {LibraryVM} from '../models/libraryVM';
import {MemberVM} from '../models/memberVM';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';

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
    member_LibraryId: null
  };

  libraryVM: LibraryVM = {
    library_code: null,
    library_name: '',
    library_address: ''
  };


  listeLibrary: LibraryVM[];

  constructor(private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router) {}

  ngOnInit() {
    this.listeLibrary = this.getLibraries();
    console.log('listeLibrary');
    console.log(this.listeLibrary);
  }


  newMember() {
    this.backService.newMember(this.memberVM).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          // cache the logged member in datashare service
          // this.dss.loggedMember = data.payload;
          // navigate to home and display navbar or the hidden tabs
          this.router.navigate(['/accueil']);

        }
      },
      error => {
        console.error(error.message);
        // messageService.displayFailureMessage(error.message);
      }

    );
  }

   getLibraries(): any {
    this.backService.getLibrary().subscribe(
      data => {
        console.log('data');
        console.log(data);
        this.backService.handleData(data);
        if (data.payload) {
          console.log('data payload');
          console.log(data.payload);
          return data.payload;
        }
      },
      error => {
        console.log('error !!!!!');
        console.error(error.message);
        // messageService.displayFailureMessage(error.message);
        return null;
      }
    );
  }

}
