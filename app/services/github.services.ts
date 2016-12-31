import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GithubService{
	private username: string;
	private client_id = '5d726eb9668a3ec492fd';
	private client_sercret = '965c181a1596093c26631d2295558de7326ffb00';

	constructor(private _http: Http) {
		this.username = 'hailiangwangutd';
	}

	getUser() {
		return this._http.get('http://api.github.com/users/' + this.username +
			'?client_id=' + this.client_id + '&client_secret=' + this.client_sercret)
			.map(res => res.json());
	}

	getRepos() {
		return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_sercret)
			.map(res => res.json());
	}

	updateUser(username:string) {
		this.username = username;
	}
}
