import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';
import { HomeComponent } from './containers/views/home/home.component';
import { PageNotFoundComponent } from './containers/views/page-not-found/page-not-found.component';
import { TodoappComponent } from './containers/views/todoapp/todoapp.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [    
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'todoapp', component: TodoappComponent},
    {path: '**', component: PageNotFoundComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
