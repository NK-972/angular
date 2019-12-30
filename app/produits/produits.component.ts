import { Component, OnInit } from '@angular/core';
import { Utilitaire } from '../utilitaire';
import {Product} from './product';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  turn: Number = 1;
  utilitaire: Utilitaire = new Utilitaire();
  isLargeNumber = (element) => element.includes(this.turn);
  produits: string = "[[JSON, Tour, Nom du produit, Recette, Prix, R&D, Production, Prod° par instal, Installation, Actif, Qualité, Indice technique, Image prix, Marge brute, Taux de marge brute, Demande, Stock, Prix de mp, Notoriété, Indice R&D, Brevet, Nbr de produit vendu, Frais de transport], [Bouteille d'eau 21811 0, 0, Bouteille d'eau, 21811, 0, 0, 0, ,0,0,, ,0,1,, 0, 0, 0.000000, 1.00, 0, 0.00, 0, 0, null, 0.00, 1.00, 0, 0, 0], [Bouteille d'eau 21811 1, 1, Bouteille d'eau, 21811, 30, 30000, 0, ,0,0,, ,0,1,, 1, 0, 0.000000, 1.00, 24, 4.00, 11200, 0, null, 0.00, 1.60, 0, 0, 0], [Bouteille d'eau 21811 2, 2, Bouteille d'eau, 21811, 30, 30000, 2000, ,0,2000,, ,0,1,, 1, 0, 0.000000, 1.00, 19, 1.73, 9200, 0, null, 0.00, 1.60, 0, 2000, 8000], [Bouteille d'eau 21811 3, 3, Bouteille d'eau, 21811, 30, 30000, 0, ,0,0,, ,0,1,, 1, 0, 0.000000, 1.00, 9, 0.43, 11200, 0, null, 0.00, 1.60, 0, 0, 0], [Bouteille d'eau 21811 4, 4, Bouteille d'eau, 21811, 30, 30000, null, ,0,0,, ,0,1,, 1, 0, null, null, null, null, null, null, null, null, null, 0, null, null]]";
  json_produits: JSON;
  key_product: string[];

  panel_produits: Product[] = [];


  createProduit(data: string[]):Product{
    let produit : Product;
    return produit ={
      id : this.utilitaire.getData(this.json_produits, name, this.turn, 'Nom du produit') + this.utilitaire.getData(this.json_produits, "Bouteille d'eau", this.turn, 'recette')
      , Prix : Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'Prix'))
      , RD : Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'R&D'))
      , Installations: []
      , InstallationSelected: ''
      , Production: Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'Productio'))
      , Qualite: Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'Qualité'))
      , IP: Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'Indice prix'))
      , IT: Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'Indice technique'))
      , Notoriete: Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'Notoriété'))
      , Demande: Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'Demande'))
      , Stock: Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'Stock'))
      , MB: Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'Marge brute'))
      , TMB: Number(this.utilitaire.getData(this.json_produits, name, this.turn, 'taux de marge brute')) 
    }
  }

  constructor() { }

  ngOnInit() {
    this.json_produits = this.utilitaire.StringToTable(this.produits);
    console.log(this.utilitaire.getData(this.json_produits, "Bouteille d'eau", 2, 'recette'));
    this.key_product = Object.keys(this.json_produits);
    console.log(this.key_product[0].includes('J'));
    console.log(this.utilitaire.getAllOcc(this.key_product, ' '+this.turn));
    this.utilitaire.getAllOcc(this.key_product, ' '+this.turn).forEach(function (value) {
      console.log(this.createProduit(this.json_produits[value]));
      this.panel_produits.push(this.createProduit(this.json_produits[value]));
    });
    console.log(this.panel_produits);
  }

}