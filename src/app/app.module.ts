import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {AccueilComponent} from './accueil/accueil.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {MemberComponent} from './member/member.component';
import {ResearchComponent} from './research/research.component';
import {AppRoutingModule} from './/app-routing.module';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {MessageComponent} from './message/message.component';
import {ResultatComponent} from './resultat/resultat.component';
import {MentionslegalesComponent} from './mentionslegales/mentionslegales.component';
import {BorrowvalidationComponent} from './borrowvalidation/borrowvalidation.component';
import {BookcrudComponent} from './bookcrud/bookcrud.component';
import {CreatelivreComponent} from './createlivre/createlivre.component';

import {BackendService} from './service/backend.service';
import {MessageService} from './service/message.service';
import {DatashareService} from './service/datashare.service';
import {CommonModule} from '@angular/common';

import {MessageDirective} from './directives/message.directive';
import { BooksComponent } from './books/books.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    MemberComponent,
    ResearchComponent,
    PagenotfoundComponent,
    MessageComponent,
    ResultatComponent,
    MentionslegalesComponent,
    MessageDirective,
    BookcrudComponent,
    CreatelivreComponent,
    BooksComponent,
    BookdetailsComponent,
    MemberdetailsComponent,
    BorrowvalidationComponent,
    UpdatebookComponent
    // HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [BackendService, MessageService, DatashareService],
  bootstrap: [AppComponent]
})
export class AppModule {}
