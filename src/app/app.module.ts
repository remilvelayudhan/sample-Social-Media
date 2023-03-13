import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
//import { AngularFireStorageModule } from '@angular/fire/storage';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PostsComponent } from './posts/posts.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginComponent,
    CreateAccountComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AngularFireModule,AngularFireModule.initializeApp(environment.firebaseConfig),MaterialFileInputModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatButtonModule,//AngularFireStorageModule,
    FormsModule,HttpClientModule,MatSnackBarModule,MatIconModule,MatMenuModule,MatCardModule,MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
