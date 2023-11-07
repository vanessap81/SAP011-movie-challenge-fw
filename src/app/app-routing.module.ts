import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  // {
  //   path: 'details',
  //   loadChildren: () => import('./components/movies/movies.module').then(m => m.MoviesModule)
  // },
  {
    path: 'details/:id',
    loadChildren: () => import('./components/movies/movies.module').then(m => m.MoviesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
