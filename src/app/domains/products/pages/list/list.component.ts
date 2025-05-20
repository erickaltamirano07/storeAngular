import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from './../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initProduct: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        img: 'https://picsum.photos/640/640?=23',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        img: 'https://picsum.photos/640/640?=24',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        img: 'https://picsum.photos/640/640?=25',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        img: 'https://picsum.photos/640/640?=23',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        img: 'https://picsum.photos/640/640?=24',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        img: 'https://picsum.photos/640/640?=25',
        creationAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProduct);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
