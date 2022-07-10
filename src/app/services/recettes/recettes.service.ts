import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Recette } from '../../model/recette.model';


@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  private recettes: Recette[] = [
    {
      id: 'cassoulet',
      titre: 'Cassoulet Toulousain',
      image: 'https://img-3.journaldesfemmes.fr/rxBb0dQN_K7O2WiHKJ5NJ37v1yE=/748x499/smart/735a6b21a6fc45fa814f0ac921a3d1d2/recipe-jdf/372361.jpg',
      ingredients: ['Haricots Secs', 'Couenne', 'Tomates', 'Saucisse', 'Cuisse de Canard']
    },
    {
      id: 'quiche',
      titre: 'Quiche Lorraine',
      image: 'https://files.meilleurduchef.com/mdc/photo/recette/quiche-lorraine/quiche-lorraine-1200.jpg',
      ingredients: ['Pâte Brisée', 'Lardons', 'Beurre', 'Oeufs', 'Crème Fraîche', 'Lait']
    },
    {
      id: 'pizza',
      titre: 'Pizza Regina',
      image: 'https://img-3.journaldesfemmes.fr/w7YT75LG3R5TKLmLwyugJucwYh8=/748x499/smart/3fe7f1f6a26c4921b9f3150e129b358b/recipe-jdf/326376.jpg',
      ingredients: ['Pâte à Pizza', 'Jambon', 'Mozzarella', 'Champignons', 'Sauce Tomate', 'Roquette'],
      urlRecette: 'https://cuisine.journaldesfemmes.fr/recette-pizza'
    },
    {
      id: 'tofu',
      titre: 'Tofu Mariné',
      image: 'https://www.aufouraumoulin.com/wp-content/uploads/2015/01/tofu_marine_grille-4.jpg',
      ingredients: ['Tofu Nature', 'Sauce Soja', 'Gingembre', 'Huile de Tournesol', 'Besoin Vital de Manger'],
      urlRecette: 'https://www.marmiton.org/recettes/recette_tofu-marine_32904.aspx'
    },
  ];

  constructor(private toastController: ToastController) { }

  /**
   * Créer une nouvelle recette
   * @param formgroup : Recette à créer
   */
  createRecette(formgroup: FormGroup, image: string) {
    const recette = {
      id: formgroup.value.title.split(' ').join('_').toLowerCase(),
      titre: formgroup.value.title,
      image: image,
      ingredients: formgroup.value.ingredients.split('\n'),
      urlRecette: formgroup.value.urlRecette
    };

    if (window.localStorage.getItem(recette.id) === null) {
      window.localStorage.setItem(recette.id, JSON.stringify(recette));
      this.toastController.create({
        message: 'Recette créée !',
        duration: 3000
      }).then(toast => toast.present());
    } else {
      this.toastController.create({
        message: 'Recette déjà existante !',
        duration: 3000
      }).then(toast => toast.present());
    }
  }

  /**
   * Récupérer toutes les recettes
   * @returns toutes les recettes
   */
  getAllRecettes() {
    let recettes = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      recettes.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    recettes.forEach(recette => { recette.ingredients = recette.ingredients[0].split(','); });
    return recettes;
  }

  /**
   * Récupérer une recette par son id
   * @param recetteId : id de la recette à récupérer
   * @returns Recette correspondante
   */
  getRecette(recetteId: string) {
    return JSON.parse(window.localStorage.getItem(recetteId));
  }

  /**
   * Modifier une recette
   * @param recette : Recette à modifier
   */
  updateRecette(recette: Recette) {
   window.localStorage.setItem(recette.id, JSON.stringify(recette));
  }

  /**
   * Supprimer une recette
   * @param recetteId : id de la recette à supprimer
   */
  deleteRecette(recetteId: string) {
    window.localStorage.removeItem(recetteId);
  }

}
