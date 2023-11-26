import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderHeadComponent } from './component/header-head/header-head.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  component: SignupComponent,
  path: 'signup'
},
{
  component: LoginComponent,
  path: ''
},
{
  component: HeaderComponent,
  path: 'header'
},
{
  component: HomeComponent,
  path: 'home'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
