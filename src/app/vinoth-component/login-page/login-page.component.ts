  import { Component, OnInit } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent, InitParams } from 'ngx-facebook';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpModule} from '@angular/http';


import { DataService } from '../../service/service';
import { AppConfig } from '../../config/config';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [DataService, AppConfig]
})
export class LoginPageComponent implements OnInit {
  // private _dataService: DataService;
  // private config: AppConfig;

  constructor(private fb: FacebookService, public router: Router,
               private _dataService: DataService, private config: AppConfig, private _http: Http) {

    // this._dataService = _dataService;
    // this.config = config;
    console.log('Initializing Facebook');

    fb.init({
      appId: '1927971220769787',
      version: 'v2.9'
    });
   }

  ngOnInit() {
    this.fetchSampleData();
  }

// login() {
//     this.fb.login()
//       .then((res: LoginResponse) => {
//         this.router.navigate(['dashBoard']);
//         console.log('Logged in', res);

//       })
//       .catch(this.handleError);
//   }



// loginWithOptions() {
    login() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        this.router.navigate(['dashBoard']);
        console.log('Logged in', res);
      })
      .catch(this.handleError);

  }


  private handleError(error) {
    console.error('Error processing action', error);
  }

  public fetchSampleData() {

      this._dataService.httpGet(this.config.URLS.sample_json).subscribe(
          data => {
            const responseJson = data.json();
            console.log('date scratch', responseJson);
          },
          error => {
                        return false;
          }
        );

        }

}
