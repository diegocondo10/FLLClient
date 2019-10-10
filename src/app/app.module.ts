import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpClientModule } from "@angular/common/http";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { FootComponent } from './components/templates/foot/foot.component';
import { PropiedadInfoComponent } from './components/propiedad/propiedad-info/propiedad-info.component';
import { PropiedadListComponent } from './components/propiedad/propiedad-list/propiedad-list.component';
import { HomeComponent } from './components/templates/home/home.component';
import { ContactoComponent } from './components/contacto/contacto/contacto.component';
import { ContactoFormComponent } from './components/contacto/contacto-form/contacto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FootComponent,
    PropiedadInfoComponent,
    PropiedadListComponent,
    HomeComponent,
    ContactoComponent,
    ContactoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({
        uri: 'http://localhost:8000/graphql',
        //uri: 'http://34.70.2.34:8000/graphql'
      }),
      cache: new InMemoryCache()
    });
  }

}
