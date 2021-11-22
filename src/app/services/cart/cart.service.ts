import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  add(product: Product): void {
    this.products.push(product);
  }

  remove(product: Product): void {
    if (!this.has(product)) return;
    this.products = this.products.filter((p) => p.id !== product.id);
  }

  getAll(): Product[] {
    return this.products;
  }

  clear(): void {
    this.products = [];
  }

  has(product: Product): boolean {
    return this.products.some((p) => p.id === product.id);
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
