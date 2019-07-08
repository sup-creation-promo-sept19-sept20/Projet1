import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateRoomComponent} from './create-room.component';


const routes: Routes = [
  {
    path: '',
    component: CreateRoomComponent
  },
  {
    path: 'create-room',
    loadChildren : './create-hostel/create-hostel.module#CreateHostelModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CreateRoomRoutingModule { }
