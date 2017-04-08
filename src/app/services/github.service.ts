import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService{
    private username:string;
    private client_id = '8068d1f1ac026a6312bb';
    private client_secret = 'e6d65da107b50e18f626086b6b8c1956505ab629';

    constructor (private _http: Http){
        console.log('Github Service Ready....');

        this.username = 'firozwebdev';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret'+this.client_secret)
            .map(res => res.json());
    }
}