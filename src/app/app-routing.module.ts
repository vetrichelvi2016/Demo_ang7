import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ModelsComponent } from './component/models/models.component';
import { MotorsportComponent } from './component/motorsport/motorsport.component';
import { OwnershipComponent } from './component/ownership/ownership.component';
import { StoreComponent } from './component/store/store.component';
import { ExperienceComponent } from './component/experience/experience.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'models', component:ModelsComponent},
  { path:'motorsport', component:MotorsportComponent },
  { path:'ownership', component:OwnershipComponent },
  { path:'store', component:StoreComponent },
  { path:'experience', component:ExperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
