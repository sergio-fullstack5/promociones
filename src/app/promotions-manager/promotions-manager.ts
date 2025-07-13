import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-promotions-manager',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './promotions-manager.html',
  styleUrl: './promotions-manager.scss'
})
export class PromotionsManager {
  loading = false;
  error: string | null = null;
  promotions: any[] = [
    {
      nombre: 'Descuento verano',
      tipo: 'Descuento',
      estado: 'Inactivo',
      

    }


  ];



}
