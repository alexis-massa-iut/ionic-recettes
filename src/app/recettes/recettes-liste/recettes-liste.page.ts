import { Component, OnInit } from '@angular/core';
import { Recette } from '../../model/recette.model';
import { RecettesService } from '../../services/recettes/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes-liste.page.html',
  styleUrls: ['./recettes-liste.page.scss'],
})

export class RecettesListePage implements OnInit {

  recettes: Recette[];

  constructor(private RecettesService: RecettesService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.recettes = this.RecettesService.getAllRecettes();
  }

}
