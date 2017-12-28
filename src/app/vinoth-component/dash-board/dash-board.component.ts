import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { DataService } from '../../service/service';
import { AppConfig } from '../../config/config';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private _dataService: DataService, private config: AppConfig, private _http: Http) { }

  ngOnInit() {
    this.fetchSampleData();
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



      //      this._http.get('../../../assets/Json-sample/sample.json').map(data => {
      //         data.json();
      //         console.log('I CAN SEE DATA HERE: ', data.json());
      // });
            }

}
