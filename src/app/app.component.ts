import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.authService.watchFirebaseConnectionState();
    this.authService.init();
    //this.getTest()
  }
/*
  getTest (){

    return this.afs.collection<>('laMeute_projet1').valueChanges()
      .pipe(
        //tap(users=> this.users=users),
        //tap(x=>console.log(x)),
      )
  }

 */
}


