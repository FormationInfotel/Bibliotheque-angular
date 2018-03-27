import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MessageDirective} from '../directives/message.directive';
import {BackendService} from '../service/backend.service';
import {MessageService} from '../service/message.service';
import {ResearchVM} from '../models/researchVM';
import {DatashareService} from '../service/datashare.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  keyword: ResearchVM = {
    keyword: ''
  };

  @ViewChild(MessageDirective) messageHost: MessageDirective;

  constructor(
    private backService: BackendService,
    private messageService: MessageService,
    private dss: DatashareService,
    private router: Router) {}

  ngOnInit() {
  }



  ngAfterViewInit() {
    console.log('passage par afterinit de header');
    console.log(this.messageHost.viewContainerRef);
    this.dss.messageViewContainerRef = this.messageHost.viewContainerRef;

  }

}
