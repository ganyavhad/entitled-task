import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadCollectionComponent } from './lead-collection/lead-collection.component';

const routes: Routes = [{
  path: "",
  component: LeadCollectionComponent
}, {
  path: '**',
  redirectTo: '/',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
