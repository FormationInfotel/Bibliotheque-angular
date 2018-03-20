import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResearchComponent } from './research/research.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
 { path: 'accueil', component: AccueilComponent },
 { path: 'header', component: HeaderComponent },
 { path: 'footer', component: FooterComponent },
 { path: 'login', component: LoginComponent },
 { path: 'member', component: MemberComponent },
 { path: 'registration', component: RegistrationComponent },
 { path: 'research', component: ResearchComponent },
 { path: '**', component: PagenotfoundComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }


