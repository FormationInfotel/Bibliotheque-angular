import {Injectable, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MessageComponent} from '../message/message.component';
import {DatashareService} from './datashare.service';


@Injectable()
export class MessageService {

  instantiatedComponent: any;


  constructor(private router: Router, private componentFactoryResolver: ComponentFactoryResolver, private dss: DatashareService) {}

  displayErrorMessage(message: string) {
    this.dss.message = message;
    this.dss.alertMessageClass = 'alert alert-danger';
    this.onDisplayMessage();
    console.log(this.dss.isMessageDisplayed);
    console.log(this.dss.alertMessageClass);
    console.log(this.dss.message);

  }

  displaySuccessfullMessage(message: string) {
    this.dss.message = message;
    this.dss.alertMessageClass = 'alert alert-success';
    this.onDisplayMessage();
  }

  displayWarningMessage(message: string) {
    this.dss.message = message;
    this.dss.alertMessageClass = 'alert alert-warning';
    this.onDisplayMessage();
  }

  private onDisplayMessage() {
    console.log('trying to display message');
    console.log(this.dss.messageViewContainerRef);

    let viewContainerRef = this.dss.messageViewContainerRef;
    if (this.instantiatedComponent) {
      viewContainerRef.remove();
    }
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MessageComponent);
    this.instantiatedComponent = viewContainerRef.createComponent(componentFactory);

    // this.router.navigate([{ outlets: { messages: [ 'messages' ] }}]);
  }

}