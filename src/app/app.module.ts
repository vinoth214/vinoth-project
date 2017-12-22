import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';
import { AgmCoreModule } from '@agm/core';
import {ModalModule} from "ng2-modal";

import { AppComponent } from './app.component';
import { SampleFirstComponent } from './vinoth-component/sample-first/sample-first.component';
import { routes } from './app.routes';
import { LandingPageComponent } from './vinoth-component/landing-page/landing-page.component';
import { LoginPageComponent } from './vinoth-component/login-page/login-page.component';
import { DashBoardComponent } from './vinoth-component/dash-board/dash-board.component';
import { SidebarComponent } from './vinoth-component/sidebar/sidebar.component';
import { HeaderComponent } from './vinoth-component/header/header.component';
import { FooterComponent } from './vinoth-component/footer/footer.component';
import { GoogleMapComponent } from './vinoth-component/google-map/google-map.component'

@NgModule({
  declarations: [
    AppComponent,
    SampleFirstComponent,
    LandingPageComponent,
    LoginPageComponent,
    DashBoardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyB6c718w5I8H50nCf5h4cKJcKNNIJjiQ5s' }),
    ModalModule
         
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
