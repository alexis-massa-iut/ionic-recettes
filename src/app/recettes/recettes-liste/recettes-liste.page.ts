import { Component, OnInit } from '@angular/core';
import { Recette } from '../../model/recette.model';
import { RecettesService } from '../../services/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes-liste.page.html',
  styleUrls: ['./recettes-liste.page.scss'],
})

export class RecettesListePage implements OnInit {

  recettes: Recette[];

  constructor(private RecettesService: RecettesService) { } // private crée un attribut dans la classe

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.recettes = this.RecettesService.getAllRecettes();
  }

}