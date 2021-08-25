import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product;
  @Output() deleteProduct: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {


  }

  onDeleteProduct() {
    this.deleteProduct.emit(this.product.ID);
  }

}
