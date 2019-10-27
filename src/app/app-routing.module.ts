import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/templates/home/home.component';
import { PropiedadInfoComponent } from './components/propiedad/propiedad-info/propiedad-info.component';



const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'propiedad/:idPropiedad', 
    component: PropiedadInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
