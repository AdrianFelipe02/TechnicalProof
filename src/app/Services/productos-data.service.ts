import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosDataService {

  // private apiUrl: string;

  // constructor(private http: HttpClient) { 
  //   this.apiUrl = 'https://fakestoreapi.com';
  // }

  // getProductos(limit: number): Observable<Producto[]> {
  //   let url = this.apiUrl+'products?limit='+limit;
  //   return this.http.get<Producto[]>(url);
  // }

  constructor(private http: HttpClient) { }

  getProducts(limit: number, sort: string): Observable<Producto[]> {
    return this.http.get<Producto[]>('https://fakestoreapi.com/products', {
      params: {
        limit: limit.toString(),
        sort: sort
      }
    });
  }
}
