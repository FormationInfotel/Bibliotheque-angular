import {Injectable} from '@angular/core';

@Injectable()
export class DatashareService {

  loggedMember: any;

  isMessageDisplayed = true;
  alertMessageClass = '';
  message = '';
  messageViewContainerRef: any;
  constructor() {}


}
