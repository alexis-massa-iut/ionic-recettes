import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { RecettesService } from 'src/app/services/recettes/recettes.service';

@Component({
  selector: 'app-recette-create',
  templateUrl: './recette-create.page.html',
  styleUrls: ['./recette-create.page.scss'],
})
export class RecetteCreatePage implements OnInit {
  formRecette: FormGroup;
  image = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'; // Default image

  constructor(
    private photoService: PhotoService, // Composant pour prendre une photo
    private recettesService: RecettesService,
    private router: Router
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
   * Méthode pour upload une photo
   * @param source (string) : source de la photo
   */
  onAddPicture(source: String) {
    if (source === 'camera') {
      this.photoService.takePicture().then(imageData => {
        this.image = 'data:image/jpeg;base64,' + imageData;
        this.formRecette.patchValue({ image: this.image }); // Image in form input
      });
    } else {
      this.photoService.uploadPicture().then(imageData => {
        this.image = 'data:image/jpeg;base64,' + imageData;
        this.formRecette.patchValue({ image: this.image }); // Image in form input
      });
    }
  }

  /**
   * Méthode pour créer une recette
   */
  onCreateRecette() {
    if (!this.formRecette.valid) return;
    this.recettesService.createRecette(this.formRecette, this.image);
    this.router.navigate(['/recettes-liste']);
  }

}
