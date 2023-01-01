import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Vdo1Component } from './components/vdo1/vdo1.component';
import { Vdo2Component } from './components/vdo2/vdo2.component';
import { Vdo3Component } from './components/vdo3/vdo3.component';
import { Vdo4Component } from './components/vdo4/vdo4.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'vdo1', component:Vdo1Component},
  {path:'vdo2', component:Vdo2Component},
  {path:'vdo3', component:Vdo3Component},
  {path:'vdo4', component:Vdo4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
