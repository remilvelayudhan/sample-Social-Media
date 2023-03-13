import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'create-account', component:CreateAccountComponent},
  {path: 'posts', component:PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
