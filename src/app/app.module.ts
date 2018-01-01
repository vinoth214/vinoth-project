import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';
import { AgmCoreModule } from '@agm/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpModule, JsonpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import {ModalModule} from "ng2-modal";

import { AppComponent } from './app.component';
import { SampleFirstComponent } from './vinoth-component/sample-first/sample-first.component';
import { routes } from './app.routes';
import { LandingPageComponent } from './vinoth-component/landing-page/landing-page.component';
import { DashBoardComponent } from './vinoth-component/dash-board/dash-board.component';
import { SidebarComponent } from './vinoth-component/sidebar/sidebar.component';
import { HeaderComponent } from './vinoth-component/header/header.component';
import { FooterComponent } from './vinoth-component/footer/footer.component';
import { GoogleMapComponent } from './vinoth-component/google-map/google-map.component';
import { DataService } from './service/service';
import { AppConfig } from './config/config';
import { RegisterComponent } from './Auth-components/register/register.component';
import { AlertService, AuthenticationService, UserService } from './Auth-components/services/index';
import { AuthGuard } from './Auth-components/guards/auth.guard';
import { LoginComponent } from './Auth-components/login/login.component';
import { AlertComponent } from './Auth-components/alert/alert.component';
import { customHttpProvider } from './Auth-components/helpers/custom-http';

@NgModule({
  declarations: [
    AppComponent,
    SampleFirstComponent,
    LandingPageComponent,
    DashBoardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    GoogleMapComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyB6c718w5I8H50nCf5h4cKJcKNNIJjiQ5s' }),
    HttpModule,
    JsonpModule,
    FormsModule,
    HttpClientModule

  ],
  exports: [RouterModule],
  providers: [DataService,
              AppConfig,
              AlertService,
              AuthenticationService,
              UserService,
              AuthGuard,
              customHttpProvider,
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
