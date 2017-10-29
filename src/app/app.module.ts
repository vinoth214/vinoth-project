import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';


import { AppComponent } from './app.component';
import { SampleFirstComponent } from './vinoth-component/sample-first/sample-first.component';
import { routes } from './app.routes';
import { LandingPageComponent } from './vinoth-component/landing-page/landing-page.component';
import { LoginPageComponent } from './vinoth-component/login-page/login-page.component';
import { DashBoardComponent } from './vinoth-component/dash-board/dash-board.component';
import { SidebarComponent } from './vinoth-component/sidebar/sidebar.component';
import { HeaderComponent } from './vinoth-component/header/header.component';
import { FooterComponent } from './vinoth-component/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    SampleFirstComponent,
    LandingPageComponent,
    LoginPageComponent,
    DashBoardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FacebookModule.forRoot()     
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
