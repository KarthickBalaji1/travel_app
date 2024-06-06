import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from '../login-page.component';
import {ReactiveFormsModule, FormsModule} from  '@angular/forms'


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
