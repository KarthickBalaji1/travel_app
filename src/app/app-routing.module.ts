import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('../app/login/login-page/login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./create-user/create/create-user.module').then(module => module.CreateUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
