import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from './Product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'roni-proj';

  products: Array<Product> = [
    {ID:1, Name: "Ham", Description: "dsdfsdfsdf", Price: 50},
    {ID:2, Name: "Salat", Description: "dsdfsdfsdf", Price: 50},
    {ID:3, Name: "Pasta", Description: "dsdfsdfsdf", Price: 50},
    {ID:4, Name: "Rice", Description: "dsdfsdfsdf", Price: 50}

  ]

  productForm: FormGroup;
  cardSelected: number;
  newProduct :Product;
  formProduct: Product;

  
  ngOnInit() {
    this.newProduct = new Product();
    this.formProduct = this.newProduct
    this.newProduct.ID = 0;
    this.productForm = new FormGroup({
      'name' : new FormControl('', [Validators.required]),
      'description' : new FormControl('',  [Validators.required]),
      'price' : new FormControl(null,  [Validators.required])

    })
  }

  onSaveProduct(){
    // chek validitions
    this.newProduct = new Product();
    this.newProduct.Name = this.productForm.get('name').value;
    this.newProduct.Description = this.productForm.get('description').value;
    this.newProduct.Description = this.productForm.get('description').value;
    this.newProduct.ID = Math.round( 100 * Math.random());
    this.products.push(this.newProduct);
    this.productForm.reset();
    this.cardSelected = this.newProduct.ID;

  }

  onAdd(){
    this.productForm.reset();
    this.newProduct = new Product();
  }

  deleteProduct(id){
    this.products.splice( this.products.findIndex(function(i){
      return i.ID === id;
    }), 1);
  }

  onCardSelcted(id){
    this.cardSelected=id;
    this.formProduct = this.products.filter(p=> p.ID == id)[0];
  }
}
