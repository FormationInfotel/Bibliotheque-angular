import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {

  isDisplayed = true;
  alertClass = '';
  message = '';

  constructor() {}

  displayErrorMessage(message: string) {
    this.message = message;
    this.alertClass = 'alert alert-danger';
  }

  displayWarningMessage(message: string) {
    this.message = message;
    this.alertClass = 'alert alert-warning';
  }

  displaySuccessMessage(message: string) {
    this.message = message;
    this.alertClass = 'alert alert-success';
  }

}
