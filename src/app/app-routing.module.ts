import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureComponent } from './voiture/voiture.component';
import { VoitureNewComponent } from './voiture-new/voiture-new.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';

const routes: Routes = [
  {
    path:'voiture',
    component:VoitureComponent
  },
  {
    path:'voiture-new',
    component:VoitureNewComponent
  },
  {
    path:'voiture-edit/:id',
    component:VoitureEditComponent
  },
  {
    path:'',
    redirectTo:'/voiture',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
