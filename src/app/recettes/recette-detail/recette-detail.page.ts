import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecettesService } from '../../services/recettes.service';
import { Recette } from '../../model/recette.model';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.page.html',
  styleUrls: ['./recette-detail.page.scss'],
})
export class RecetteDetailPage implements OnInit {
  recette: Recette;

  constructor(private activatedRoute: ActivatedRoute,
    private RecettesService: RecettesService,
    private Router: Router,
    private AlertCtrl: AlertController, // Composant pour afficher une alerte
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recetteId')) { // si pas de paramètre recetteId dans la route
        this.Router.navigate(['/recettes-liste']); // on redirige sur la page des recettes
        return;
      }
      const recetteId = paramMap.get('recetteId');
      this.recette = this.RecettesService.getRecette(recetteId);
      if (!this.recette.id) { // si la recette n'existe pas, redirection
        this.Router.navigate(['/recettes-liste']); // on redirige sur la page des recettes
      }
    });
  }

  onDeleteRecette() { // Supprimer la recette
    this.AlertCtrl.create({
      header: 'Confirmation',
      message: 'Supprimer la recette ' + this.recette.titre,
      buttons: [
        { text: 'Annuler', role: 'cancel ' },
        {
          text: 'Supprimer',
          handler: () => {
            this.RecettesService.deleteRecette(this.recette.id);
            this.Router.navigate(['/recettes-liste']);
          }
        }]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}
