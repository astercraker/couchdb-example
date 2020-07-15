import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsDeaceroService {
  url: any = {
    'default': 'https://dmo.plasmout.com/sync/v2-products-es/_design/info/_view/info',
    'v3': 'https://dmo.plasmout.com/sync/v3-products-es/_design/ids/_view/listingv2',
  };
  urlSelected: string;
  constructor(private http: HttpClient) { 
  }
  getProducts(option): Observable<any> {
    this.urlSelected = (option == 1)? this.url.default: this.url.v3;
    return this.http.get(`${this.urlSelected}`).pipe(
      map(results => results)
    );
  }
}
