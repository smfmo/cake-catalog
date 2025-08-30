import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import {MatCard, MatCardHeader,
   MatCardImage, MatCardActions,
    MatCardContent, MatCardTitle,
    MatCardSubtitle} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MatCard, MatCardHeader,
   MatCardImage, MatCardActions,
    MatCardContent, MatCardTitle,
    MatCardSubtitle,
    MatIconModule
  ]
})
export class CatalogModule { }
