import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserComponent } from './update-user.component';
import {UpdateUserRoutingModule} from "./update-user.routing.module";
import {AuthModule} from "../auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    UpdateUserRoutingModule,
    AuthModule
  ],
  declarations: [
    UpdateUserComponent
  ]
})
export class UpdateUserModule { }
