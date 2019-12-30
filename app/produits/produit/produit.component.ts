import { Component, OnInit, Input } from '@angular/core';
import { Utilitaire } from '../../utilitaire';
import {Product} from '../product';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() data: Product;
  utilitaire: Utilitaire = new Utilitaire();

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }
}