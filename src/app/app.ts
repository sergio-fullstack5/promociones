import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PromotionsManager } from './promotions-manager/promotions-manager';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PromotionsManager],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'promociones';
}


