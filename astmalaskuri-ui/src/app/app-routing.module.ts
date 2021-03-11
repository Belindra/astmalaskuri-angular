import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMenuComponent } from './start-menu/start-menu.component';



const routes: Routes = [
 /* { path: 'add-object', component: AddObjectComponent }, */

  { path: '**', component: StartMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [

  ]
})
export class AppRoutingModule { }
