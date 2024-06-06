import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from '../create-user/create-user.component';
import {ReactiveFormsModule} from '@angular/forms'
import { LoadingSpinnerComponent } from 'src/app/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [CreateUserComponent,
    ],
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent    
  ]
})
export class CreateUserModule { }
