import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PromotionService } from '../core/services/promotion'; 

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
export class PromotionsManager implements OnInit {
  public promotions: any[] = []; 
  public loading: boolean = true; 
  public error: string | null = null;
  private sede = 'tus-ede-de-prueba';
  
  constructor(private promotionService: PromotionService) {}

  ngOnInit(): void {
    this.loadpromotions();
  }

  loadpromotions(): void {

    this.loading = true;
    this.error = null;

    this.promotionService.getAllPromotions(this.sede).subscribe({
      next: (response: any) =>{
        this.promotions = response.data;
        this.loading = false;
      },

      error: (err: any) => {

        console.error('Error al cargar promociones:' ,err);
        this.error ='no se pudieron carlgar las promociones. ';
        this.loading = false;
      }
    });
  }
}
