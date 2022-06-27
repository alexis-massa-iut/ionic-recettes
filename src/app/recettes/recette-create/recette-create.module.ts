import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetteCreatePageRoutingModule } from './recette-create-routing.module';

import { RecetteCreatePage } from './recette-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecetteCreatePageRoutingModule
  ],
  declarations: [RecetteCreatePage]
})
export class RecetteCreatePageModule {}
