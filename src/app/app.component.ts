import { Component } from '@angular/core';

import { products } from "./products"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoMe';
  products = products;

  send() {
    window.alert("You don't have enough money")
  }
}

export class productsComponent {

}
