import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RecettesService } from 'src/app/services/recettes/recettes.service';
import { Recette } from '../../model/recette.model';

@Component({
  selector: 'app-recette-item',
  templateUrl: './recette-item.component.html',
  styleUrls: ['./recette-item.component.scss'],
})
export class RecetteItemComponent implements OnInit {
  @ViewChild('ionItemSliding') ionItemSliding: HTMLIonItemSlidingElement;
  @Input() recette: Recette; // @input() : pour pouvoir lier de l'extérieur
  constructor(
    private recettesService: RecettesService,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  /**
   * Supprimer une recette
   */
  onDeleteRecette() {
    this.alertController.create({
      header: 'Confirmation',
      message: `Voulez-vous vraiment supprimer la recette ${this.recette.titre}`,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => this.ionItemSliding.close()
        },
        {
          text: 'Supprimer',
          handler: () => this.recettesService.deleteRecette(this.recette.id)
        }
      ]
    }).then(alert => alert.present());
  }
}
