import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { CategoriesPage } from '../categories/categories';
import { ProfilePage } from '../profile/profile';
import { RegisterDjPage } from '../register-dj/register-dj';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ) {

  }

  Register(){
    this.navCtrl.push(RegisterPage);
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  nextPage(){
    this.navCtrl.push(CategoriesPage);
  }

  Profile(){
    this.navCtrl.push(ProfilePage);
  }

  Registeration(){
    this.navCtrl.push(RegisterDjPage);
  }
}
