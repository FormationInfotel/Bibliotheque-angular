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
import {BookComponent} from './book/book.component';
import {MemberComponent} from './member/member.component';
import {ResearchComponent} from './research/research.component';
import {AppRoutingModule} from './/app-routing.module';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {MessageComponent} from './message/message.component';
import {ResultatComponent} from './resultat/resultat.component';
import {MentionslegalesComponent} from './mentionslegales/mentionslegales.component';

import {BackendService} from './service/backend.service';
import {MessageService} from './service/message.service';
import {DatashareService} from './service/datashare.service';
import {CommonModule} from '@angular/common';

import {MessageDirective} from './directives/message.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    BookComponent,
    MemberComponent,
    ResearchComponent,
    PagenotfoundComponent,
    MessageComponent,
    ResultatComponent,
    MentionslegalesComponent,
    MessageDirective
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
