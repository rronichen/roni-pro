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
    {ID:0, Name: "Ham", Description: "dsdfsdfsdf", Price: 50},
    {ID:1, Name: "Salat", Description: "dsdfsdfsdf", Price: 50},
    {ID:2, Name: "Pasta", Description: "dsdfsdfsdf", Price: 50},
    {ID:3, Name: "Rice", Description: "dsdfsdfsdf", Price: 50}

  ]

  productForm: FormGroup;
  cardSelected: number = 1;

  
  ngOnInit() {
    this.productForm = new FormGroup({
      'name' : new FormControl('', [Validators.required]),
      'description' : new FormControl('',  [Validators.required]),
      'price' : new FormControl(null,  [Validators.required])

    })
  }

  onSaveProduct(){
    // chek validitions
    let newProduct = new Product();
    newProduct.Name = this.productForm.get('name').value;
    newProduct.Description = this.productForm.get('description').value;
    newProduct.Description = this.productForm.get('description').value;
    newProduct.ID = 100 * Math.random();
    this.products.push(newProduct);
    this.productForm.reset();
    
  }

  onAdd(){
    this.productForm.reset();
  }

  deleteProduct(id){
    this.products.splice( this.products.findIndex(function(i){
      return i.ID === id;
    }), 1);
  }

  onCardSelcted(id){
    debugger;
    this.cardSelected=id;
  }
}
