import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DatabaseProvider } from '../providers/database/database';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterDjPage } from '../pages/register-dj/register-dj';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriesPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    RegisterPage,
    RegisterDjPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriesPage,
    LoginPage, 
    RegisterPage,
    ProfilePage,
    RegisterPage,
    RegisterDjPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}
