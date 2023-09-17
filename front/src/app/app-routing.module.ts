import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewhomeComponent } from './Events/views/viewhome/viewhome.component';
import { ViewbooksComponent } from './Events/views/viewbooks/viewbooks.component';
import { ViewfilmsComponent } from './Events/views/viewfilms/viewfilms.component';
import { ViewgamesComponent } from './Events/views/viewgames/viewgames.component';

const routes: Routes = [

  { path: '', redirectTo: '/viewhome', pathMatch: 'full'},
  { path: 'viewhome', component: ViewhomeComponent },
  { path: 'viewbooks', component: ViewbooksComponent },
  { path: 'viewfilms', component: ViewfilmsComponent },
  { path: 'viewgames', component: ViewgamesComponent },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
