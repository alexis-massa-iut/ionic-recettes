import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { RecettesService } from 'src/app/services/recettes/recettes.service';

@Component({
  selector: 'app-recette-create',
  templateUrl: './recette-create.page.html',
  styleUrls: ['./recette-create.page.scss'],
})
export class RecetteCreatePage implements OnInit {
  formRecette: FormGroup;

  constructor(
    private photoService: PhotoService, // Composant pour prendre une photo
    private recettesService: RecettesService,
    private toastController: ToastController, // Controlleur pour créer un toast
  ) { }

  ngOnInit() { this.generateFormValidation(); }

  /**
   * Création du formulaire de création de recette
   */
  generateFormValidation() {
    this.formRecette = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(50)]
      }),
      image: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      ingredients: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      urlRecette: new FormControl(null, {
        updateOn: 'change',
        validators: []
      }),
    });
  }

  /**
   * Méthode pour prendre une photo
   */
  onUpdatePicture() { // Prendre une photo
    this.photoService.takePicture()
      .then(ImageData => {
        this.formRecette.setValue({ image: 'data:image/jpeg;base64,' + ImageData });
      }
      ).catch(error => {
        this.toastController.create({
          message: 'Erreur lors de la prise de photo',
          duration: 3000
        }).then(toast => toast.present());
      }
      );
  }

  onCreateRecette() {
    if (this.formRecette.valid) {
      console.log(this.formRecette); //TODO: créer recette
    }
  }

}
