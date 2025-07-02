import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountsComponent } from './userAccounts/userAccounts.component';
import { AddproComponent } from './addpro/addpro.component';
import { HeaderContentEditorComponent } from './headerContentEditor/headerContentEditor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { CountCharPipe } from 'src/app/pipes/count-char.pipe';



@NgModule({
  declarations: [
    UserAccountsComponent,
    HeaderContentEditorComponent,
    AddproComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
