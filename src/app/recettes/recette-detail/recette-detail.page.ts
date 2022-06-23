import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecettesService } from '../../services/recettes/recettes.service';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { Recette } from '../../model/recette.model';

import { AlertController, ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.page.html',
  styleUrls: ['./recette-detail.page.scss'],
})
export class RecetteDetailPage implements OnInit {
  recette: Recette;

  constructor(private activatedRoute: ActivatedRoute,
    private recettesService: RecettesService,
    private router: Router,
    private alertCtrl: AlertController, // Controlleur pour créer une alerte
    private photoService: PhotoService, // Composant pour prendre une photo
    private toastController: ToastController, // Controlleur pour créer un toast
    private inAppBrowser: InAppBrowser, // Composant pour ouvrir une page dans un navigateur
    private nativeStorage: NativeStorage // Composant pour stocker des données
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recetteId')) { // si pas de paramètre recetteId dans la route
        this.router.navigate(['/recettes-liste']); // on redirige sur la page des recettes
        return;
      }
      const recetteId = paramMap.get('recetteId');
      this.recette = this.recettesService.getRecette(recetteId);
      if (!this.recette.id) { // si la recette n'existe pas, redirection
        this.router.navigate(['/recettes-liste']); // on redirige sur la page des recettes
      }
    });
  }

  /**
   * Méthode pour prendre une photo
   */
  onUpdatePicture() { // Prendre une photo
    this.photoService.takePicture()
      .then(ImageData => {
        this.recette.image = 'data:image/jpeg;base64,' + ImageData;
        this.recettesService.updateRecette(this.recette);
      }
      ).catch(error => {
        this.toastController.create({
          message: 'Erreur lors de la prise de photo',
          duration: 3000
        }).then(toast => toast.present());
      }
      );
  }

  /**
   * Méthode pour ouvrir le lien recette
   */
  onConsultRecette() { // Consulter la recette
    const browser = this.inAppBrowser.create(this.recette.urlRecette);
    browser.show();
  }

  /**
   * Méthode pour stocker la recette dans le localStorage
   */
  onDeleteRecette() { // Supprimer la recette
    this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Supprimer la recette ' + this.recette.titre,
      buttons: [
        { text: 'Annuler', role: 'cancel ' },
        {
          text: 'Supprimer',
          handler: () => {
            this.recettesService.deleteRecette(this.recette.id);
            this.router.navigate(['/recettes-liste']);
          }
        }]
    }).then(alertEl => {
      alertEl.present();
    });
    // TODO: supprimer la recette
  }

  /**
   * Ouvrir l'url de la recette dans un nouvel ounglet
   */
  onOpenUrl() {
    this.inAppBrowser.create(this.recette.urlRecette);
  }

}
