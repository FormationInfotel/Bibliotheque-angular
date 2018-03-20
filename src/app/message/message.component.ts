import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  alertClass = 'alert-dismissible fade show';
  message = '';
  isDisplayed = false;


  constructor(private msService: MessageService) {  }

  ngOnInit() {
    this.alertClass = this.msService.alertClass + this.message;
    this.message = this.msService.message;
    this.isDisplayed = this.msService.isDisplayed;
    console.log('aaaaa' + this.alertClass, this.message, this.isDisplayed);
  }

}
