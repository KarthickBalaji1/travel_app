import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LoginService } from 'src/app/service/login-service/login-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  // unsubscribe
  private _ngUnSubscribe: Subject<void> = new Subject();

  // formgroup declartion
  public registerForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    retypePassword: new FormControl('',[Validators.required]),
  })
  public isLoading: Boolean = false;
  constructor(private _loginService:LoginService,
    private _router: Router) { }

  ngOnInit(): void {

  }

  public register(){
    const data = {
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
    }
    this._loginService.register(data)
    .pipe(takeUntil(this._ngUnSubscribe.asObservable()))
    .subscribe(res =>{
      this.isLoading= true;
      if(res){
        this.isLoading = false;
        this._router.navigate([''])
      }
      console.log(res);
    })
  }
  public ngOnDestroy(): void{
    this._ngUnSubscribe.next();
    this._ngUnSubscribe.complete();
  }

}
