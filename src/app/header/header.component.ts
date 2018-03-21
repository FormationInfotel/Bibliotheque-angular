import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { MessageDirective } from '../directives/message.directive';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild(MessageDirective) messageHost: MessageDirective;

  constructor(private dss: DatashareService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('passage par afterinit de header');
    console.log(this.messageHost.viewContainerRef);
    this.dss.messageViewContainerRef = this.messageHost.viewContainerRef;

  }

}
