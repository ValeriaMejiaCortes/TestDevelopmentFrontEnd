import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app/shared/public-routes';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicLayoutComponent } from './shared/public-layout/public-layout.component';
import { UsersComponent } from './components/users/users.component';
import { DetailsComponent } from './components/details/details.component';
import { ChartsModule } from 'ng2-charts';
import { GraphicComponent } from './components/graphic/graphic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicLayoutComponent,
    UsersComponent,
    DetailsComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
