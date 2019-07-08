import { Component, OnInit } from '@angular/core';
import {tap} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";
import {UserModel} from "../../../interfaces/user.model";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(

    private afs:AngularFirestore
  ) { }


  users: UserModel[];

  ngOnInit() {
    this.tesUsers();
  }


  tesUsers(){
    return this.afs.collection('lameute_Team_projet1').doc('current').collection<UserModel>('users').valueChanges()
      .pipe(

        tap(users=>this.users = users),
        tap(x => console.log(x)),
      )
      .subscribe()


  }
}
