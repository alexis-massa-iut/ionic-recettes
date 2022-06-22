import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recettes-liste',
    pathMatch: 'full'
  },
  {
    path: 'recettes-liste',
    loadChildren: () => import('./recettes/recettes-liste/recettes-liste.module').then(m => m.RecettesListePageModule)
  },
  {
    path: 'recette-detail/:recetteId',
    loadChildren: () => import('./recettes/recette-detail/recette-detail.module').then(m => m.RecetteDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
