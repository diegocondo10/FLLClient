import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/templates/home/home.component';
import {PropiedadInfoComponent} from './components/propiedad/propiedad-info/propiedad-info.component';
import {PropiedadFilterComponent} from './components/propiedad/propiedad-filter/propiedad-filter.component';
import {SobreNosotrosComponent} from './components/info/sobre-nosotros/sobre-nosotros.component';
import {DireccionComponent} from './components/info/direccion/direccion.component';
import {ContactoComponent} from './components/contacto/contacto/contacto.component';
import {ContactanosComponent} from './components/info/contactanos/contactanos.component';
import {PropiedadListComponent} from './components/propiedad/propiedad-list/propiedad-list.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'buscar',
    component: PropiedadListComponent,
  },
  {
    path: 'nosotros',
    component: SobreNosotrosComponent
  },
  {
    path: 'direccion',
    component: DireccionComponent
  },
  {
    path: 'contactanos',
    component: ContactanosComponent
  },
  {
    path: 'propiedad/:id',
    component: PropiedadInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
