import { HttpClient } from "@angular/common/http";
import { BaseUrl } from "../base-url/app-api-url.config";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class LoginService{
    constructor(private _http: HttpClient){}

    public checkLogin(){
        return this._http.get(BaseUrl.login)
    }
    public loginUser(credentials: any):Observable<any>{
       return this._http.post(BaseUrl.login,credentials);
    }
    public register(data: any):Observable<any>{
        return this._http.post(BaseUrl.register,data);
    }
}