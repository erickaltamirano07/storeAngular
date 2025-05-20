import { Component, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from './../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

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
    this.cart.update((prevState) => [...prevState, product]);
  }
}
