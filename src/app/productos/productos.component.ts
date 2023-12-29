import { Component, ViewChild } from '@angular/core';
import { Producto } from '../Interfaces/producto';
import { ProductosDataService } from '../Services/productos-data.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  listProducts: Producto[] = [];
  searchTerm: string;
  limit: number;
  sort: string;

  constructor(private productService: ProductosDataService) {
    this.searchTerm = '';
    this.limit = 10;
    this.sort = 'asc';
  }

  ngOnInit(): void {
    this.getProductos();
  }

  onSearchChange(searchValue: string): void {
    this.searchTerm = searchValue;
  }

  getProductos() {
    this.productService.getProducts(this.limit, this.sort).subscribe(data => {
      this.listProducts = data;
    })
  }
  
}
