import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Usuario {

    url: string = "https://ipet-php.herokuapp.com/api/?tab=usuario";
    table: string;
    id: string = "&id=";

    user: any = {
        user: "",
        pass: ""
    };

    headers: HttpHeaders ;

    constructor(public http: HttpClient) {
        this.headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": "Basic YWRtaW46WVdSdGFXNHhNak09"
        });
    }

    ionViewWillLoad() {
        
    }

    get(id?: string) {
        if (!id) {
            return new Promise((resolve, reject) => {
                this.http.get(this.url, { headers: this.headers }).subscribe(
                    data => {
                        resolve(data);
                    },
                    err => {
                        reject(err);
                    }
                )
            });
        } else {
            return new Promise((resolve, reject) => {
                this.http.get(this.url + this.id + id, { headers: this.headers }).subscribe(
                    data => {
                        resolve(data);
                    },
                    err => {
                        reject(err);
                    }
                )
            });
            
        }

    }

    sendAuth(user: string, pass: string) {
        this.user.user = user;
        this.user.pass = pass;
    }
}