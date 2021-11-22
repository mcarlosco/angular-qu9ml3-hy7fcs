import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.product = products.find((product) => product.id === productId);
  }

  addToCart(product: Product): void {
    this.cartService.add(product);
    window.alert('Your product has been added to the cart!');
  }

  removeFromCart(product: Product): void {
    this.cartService.remove(product);
  }

  wasAddedToCart(product: Product): boolean {
    return this.cartService.has(product);
  }
}
