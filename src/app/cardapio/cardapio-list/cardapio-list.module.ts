import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../../core/modules/shared/shared.module';
import { CardapioListPageRoutingModule } from './cardapio-list-routing.module';
import { CardapioListPage } from './cardapio-list.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    CardapioListPageRoutingModule
  ],
  declarations: [CardapioListPage]
})
export class CardapioListPageModule {}
