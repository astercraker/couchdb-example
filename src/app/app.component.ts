import { Component } from '@angular/core';
import { ProductsDeaceroService } from "./common/services/products-deacero.service";
import {FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coutchdb-deacero';
  products: Array<any> = new Array();
  searchword: string = "";
  initForm: any;
  filteredData:Array<any> = new Array();

  selectOption: number = 1;
  constructor(private serviceProduct:ProductsDeaceroService, private fb: FormBuilder){
    this.initForm = fb.group(
      {
        'search': ["", Validators.required],
        'option': ["", Validators.required]
      }
    );
    this.serviceProduct.getProducts(this.selectOption)
    .subscribe(data => {
      for (let index = 0; index < data.rows.length; index++) {
        const element = data.rows[index].value;
        this.products.push(element);
      }
    })
    this.filteredData = this.products;
  }

  searchThis():void{
    console.log(this.searchword);
    if (this.searchword != "") {
      this.filteredData = this.products.filter((ele, i, array) => {
        let arrayelement = ele.name.toLowerCase()
        return arrayelement.includes(this.searchword)
      })
    }
    else {
      this.filteredData = this.products;
    }
    console.log(this.filteredData);
  }
  onOptionsSelected(){
      this.products = new Array();
      this.filteredData = new Array();
      this.serviceProduct.getProducts(this.selectOption)
      .subscribe(data => {
        for (let index = 0; index < data.rows.length; index++) {
          const element = data.rows[index].value;
          this.products.push(element);
        }
        this.searchThis();
      })
      
  }
}