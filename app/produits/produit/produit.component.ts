import { Component, OnInit, Input } from '@angular/core';
import { Utilitaire } from '../../utilitaire';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() data: Array<string>;
  @Input() id_Product: string;
  utilitaire: Utilitaire = new Utilitaire();

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    console.log(this.id_Product);
  }
}