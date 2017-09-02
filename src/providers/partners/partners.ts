import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { UserInfoProvider } from './../user-info/user-info';

@Injectable()
export class PartnersProvider {
  api_url: string = 'https://cerveja-api.herokuapp.com';

  constructor(
    public http: Http,
    private userInfo: UserInfoProvider
  ) { }

  getIndexPartners() {
    let headers = new Headers();
    headers.append('Content-type', 'application/x-www-urlencoded');
    headers.append('Access-token', this.userInfo.accessToken);
    headers.append('Uid', this.userInfo.email);
    headers.append('Client', this.userInfo.client);

    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(this.api_url + '/partners', options)
        .map(response => response.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
    })
  }
}
