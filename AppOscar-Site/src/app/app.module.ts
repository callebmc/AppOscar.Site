import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CategoriaService } from './_services/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { CategoriaListResolver } from './_resolvers/categoria-list.resolver';
import { CategoriaCardComponent } from './categoria/categoria-card/categoria-card.component';
import { CategoriaCreateComponent } from './categoria/categoria-create/categoria-create.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      CategoriaListComponent,
      CategoriaCardComponent,
      CategoriaCreateComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
   ],
   providers: [
     CategoriaService,
     CategoriaListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
