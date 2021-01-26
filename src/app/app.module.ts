import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './containers/layout/layout.component';
import { HomeComponent } from './containers/views/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from  './material/material.module';
import { FormsModule } from '@angular/forms';
import { TodoappComponent } from './containers/views/todoapp/todoapp.component';
import { PageNotFoundComponent } from './containers/views/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    NavigationComponent,
    TodoappComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
