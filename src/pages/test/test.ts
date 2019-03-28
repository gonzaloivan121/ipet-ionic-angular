import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../providers/api/usuario';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: Usuario) {
  }

  ionViewDidLoad() {
    
  }

  test() {
    this.user.sendAuth("admin", "YWRtaW4xMjM=");
    this.user.get().then(val => {
      this.users = val;
      console.log(this.users)
    }).catch(err => {
      console.log(err)
    });
  }

  buttonClick(user) {
    console.log(user)
  }

}
