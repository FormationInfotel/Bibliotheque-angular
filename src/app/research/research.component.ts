import {Component, OnInit} from '@angular/core';
import {ResearchVM} from '../models/researchVM';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {DatashareService} from '../service/datashare.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  keyword: ResearchVM = {
    keyword: ''
  };

  constructor(
    private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router) {}

  ngOnInit() {
  }

  research() {
    this.backService.Research(this.keyword).subscribe(

      data => {
        console.log(data);
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          // cache the logged member in datashare service
          this.dss.loggedMember = data.payload;
          // navigate to home and display navbar or the hidden tabs
          this.router.navigate(['/resultat']);
        }

      },
      error => {

        console.error(error.message);
        // messageService.displayFailureMessage(error.message);
      }
    );

  }
}
