import { Injectable } from '@angular/core';
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

  constructor() { }

  /**
   * Récupérer toutes les recettes
   * @returns toutes les recettes
   */
  getAllRecettes() {
    return [...this.recettes]; // on utilise l'opérateur de décomposition (...) pour cloner le tableau
  }

  /**
   * Récupérer une recette par son id
   * @param recetteId : id de la recette à récupérer
   * @returns Recette correspondante
   */
  getRecette(recetteId: string) {
    return {
      ...this.recettes.find( // on utilise l'opérateur de décomposition (...) pour cloner la recette
        recette => {
          return recette.id === recetteId;
        })
    };
  }

  /**
   * Modifier une recette
   * @param recette : Recette à modifier
   * @returns Recette modifiée
   */
  updateRecette(recette: Recette) {
    this.recettes = this.recettes.map(recetteExistante => {
      if (recetteExistante.id === recette.id) {
        return recette;
      }
      return recetteExistante;
    });
    //TODO: mettre à jour la recette dans la base de données
  }

  /**
   * Supprimer une recette
   * @param recetteId : id de la recette à supprimer
   */
  deleteRecette(recetteId: string) {
    this.recettes = this.recettes.filter(recette => {
      return recette.id !== recetteId;
    });
    //TODO: supprimer la recette dans la base de données
  }

}
