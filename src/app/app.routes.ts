import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SampleFirstComponent } from './vinoth-component/sample-first/sample-first.component';
import { LandingPageComponent } from './vinoth-component/landing-page/landing-page.component';
import { DashBoardComponent } from './vinoth-component/dash-board/dash-board.component';
import { GoogleMapComponent } from './vinoth-component/google-map/google-map.component';
import { RegisterComponent } from './Auth-components/register/register.component';
import { AuthGuard } from './Auth-components/guards/auth.guard';
import { LoginComponent } from './Auth-components/login/login.component';



export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing',  component: LandingPageComponent } ,
   { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'sample', component: SampleFirstComponent},
  { path: 'dashBoard', component: DashBoardComponent, canActivate: [AuthGuard]},
  { path: 'googleMap', component: GoogleMapComponent, canActivate: [AuthGuard]},
];