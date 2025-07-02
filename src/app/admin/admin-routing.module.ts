import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderContentEditorComponent } from './headerContentEditor/headerContentEditor.component';
import { UserAccountsComponent } from './userAccounts/userAccounts.component';
import { AddproComponent } from './addpro/addpro.component';


const routes: Routes = [
  {
    path: "admin", children: [
      {
        path: "navForm",
        component: HeaderContentEditorComponent
      },
      {
        path: "addpro",
        component: AddproComponent
      }, {
        path: "product-update/:proid",
        component: AddproComponent
      }, {
        path: "allusers",
        component: UserAccountsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
