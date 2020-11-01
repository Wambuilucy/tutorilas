import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {NewProjectComponent} from './new-project/new-project.component'
import {TutorialDetailsComponent}     from './tutorial-details/tutorial-details.component'

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials/', component: HomeComponent },
  { path: 'tutorials/id', component: TutorialDetailsComponent },
  { path: 'add/', component: NewProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
