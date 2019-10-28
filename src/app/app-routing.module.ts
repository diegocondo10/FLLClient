import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/templates/home/home.component';
import {PropiedadInfoComponent} from './components/propiedad/propiedad-info/propiedad-info.component';
import { PropiedadFilterComponent } from './components/propiedad/propiedad-filter/propiedad-filter.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'buscar',
    component: PropiedadFilterComponent
  },
  
  {
    path: 'propiedad/:id',
    component: PropiedadInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
