// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { Comp3Component } from './comp3/comp3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'home', component: HomeComponent },
  { path: 'comp3', component: Comp3Component },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
