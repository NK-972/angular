import './polyfills';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app/app.component';
import {ProduitsComponent} from './app/produits/produits.component';
import {ProduitComponent} from './app/produits/produit/produit.component';

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule
  ]
})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AppComponent, ProduitsComponent, ProduitComponent, ],
  declarations: [AppComponent, ProduitsComponent, ProduitComponent, ],
  bootstrap: [AppComponent, ProduitsComponent, ProduitComponent,],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */