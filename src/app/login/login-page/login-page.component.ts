import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { LoginService } from 'src/app/service/login-service/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class  LoginPageComponent implements OnInit {
  // unsubscribe
  private _ngUnSubscribe: Subject<void> = new Subject();
  // declaring form group
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  // create user screen
  public signupClicked: boolean = false;

  constructor(private _loginService:LoginService) {
   }

  ngOnInit(): void {


  }

  public login(){
    let credentials = {
      "Username":this.loginForm.controls['username'].value,
      "Password":this.loginForm.controls['password'].value
    }
    this._loginService.checkLogin()
    .pipe(takeUntil(this._ngUnSubscribe.asObservable()))
    .subscribe( success =>{
      console.log(success);
    })
  }

  public create(){
    this.signupClicked = true;
  }

  public ngOnDestroy():void{
    this._ngUnSubscribe.next();
    this._ngUnSubscribe.complete();
  }

}
