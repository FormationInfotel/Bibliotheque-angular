import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {MemberComponent} from './member/member.component';
import {MemberdetailsComponent} from './memberdetails/memberdetails.component';
import {RegistrationComponent} from './registration/registration.component';
import {ResearchComponent} from './research/research.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {ResultatComponent} from './resultat/resultat.component';
import {MentionslegalesComponent} from './mentionslegales/mentionslegales.component';
import {MessageComponent} from './message/message.component';
import {BookcrudComponent} from './bookcrud/bookcrud.component';
import {CreatelivreComponent} from './createlivre/createlivre.component';
import {BooksComponent} from './books/books.component';
import {BookdetailsComponent} from './bookdetails/bookdetails.component';
import {BorrowvalidationComponent} from './borrowvalidation/borrowvalidation.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'member', component: MemberComponent},
  {path: 'memberdetails', component: MemberdetailsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'resultat', component: ResultatComponent},
  {path: 'borrow', component: BorrowvalidationComponent},
  {path: 'book', component: BookcrudComponent},
  {path: 'createbook', component: CreatelivreComponent},
  {path: 'books', component: BooksComponent},
  {path: 'bookdetails', component: BookdetailsComponent},
  {path: 'mentionslegales', component: MentionslegalesComponent},
  {path: 'messages', component: MessageComponent, outlet: 'messages'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


