import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettesListePageRoutingModule } from './recettes-liste-routing.module';

import { RecettesListePage } from './recettes-liste.page';
import { RecetteItemComponent } from '../recette-item/recette-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettesListePageRoutingModule
  ],
  declarations: [RecettesListePage, RecetteItemComponent] // importer RecetteItem à la main
})
export class RecettesListePageModule {}
