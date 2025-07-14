import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  // La URL de tu backend.
  private apiUrl = 'http://localhost:3000/promotion';

  constructor(private http: HttpClient) { }

  // Función para crear los encabezados que pide tu API.
  private getHeaders(sede: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'sede': sede
    });
  }

  // Función para obtener todas las promociones.
  getAllPromotions(sede: string): Observable<any> {
    const url = `${this.apiUrl}/getAllPromotions`;
    const headers = this.getHeaders(sede);
    return this.http.get(url, { headers });
  }
}