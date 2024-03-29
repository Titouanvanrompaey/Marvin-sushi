import { Component } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(private apiService: ApiService){

  }



  getBoxes(): void{
    // La méthode va récupérer une collection de boxes de l'API
    this.apiService.getBoxes().subscribe((res: any)=>{
    // Boucle itérant sur chaque objet de l'API pour instancier et valoriser
    //les boxes de l'application :
    // for (let boxApi of res) {
    // let box: Box = new Box();
    // box.id = boxApi.id;
    // box.nom = boxApi.nom;
    // box.nbPieces = boxApi.pieces;
    // box.prix = boxApi.prix.toFixed(2);
    // box.image = boxApi.image;
    // box.saveurs = boxApi.saveurs;
    // let listeAliments: Aliment[] = [];
    // for (let alimentApi of boxApi.aliments) {
    // let aliment = new Aliment(alimentApi.nom, alimentApi.quantite);
    // listeAliments.push(aliment);
    // }
    // box.aliments = listeAliments;
    // this.boxes.set(boxApi.id, box);
    // }
    });
    }

}

