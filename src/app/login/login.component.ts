import {Component, OnInit} from '@angular/core';
import {IdentifiantsVM} from '../models/identifiantsVM';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  identifiants: IdentifiantsVM = {
    email: '',
    password: ''
  };

  constructor(
    private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router) {}

  ngOnInit() {
  }

  login() {
    this.backService.Login(this.identifiants).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          // cache the logged member in datashare service
          this.dss.loggedMember = data.payload;
          // navigate to home and display navbar or the hidden tabs
          this.router.navigate(['/accueil']);

        }
      },
      error => {
        console.error(error.message);
        this.messageService.displayErrorMessage(error.message);
      }

    );

  }
}
