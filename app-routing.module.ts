import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

const routes: Routes = [
  { path: 'technologies', component: TechnologiesComponent },
  {
    path: 'books',
    component: BooksComponent,
  },
  // add default path
  {
    path:'',component:TechnologiesComponent
  }
  ,
  //  its wildcraft routeing
  {
    path:'**',component:InvalidPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
