import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent, InitParams } from 'ngx-facebook';

import { AlertService, AuthenticationService } from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private fb: FacebookService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    fb.init({
      appId: '1927971220769787',
      version: 'v2.9'
    });
   }

  ngOnInit() {
            // reset login status
            this.authenticationService.logout();

            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  loginFb() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        this.router.navigate(['dashBoard']);
        localStorage.setItem('currentUser', JSON.stringify(res));
        console.log('Logged in', res);
      })
      .catch(this.handleError);

  }
  private handleError(error) {
    console.error('Error processing action', error);
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}
