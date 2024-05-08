import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

// format for data.json to be used
export interface ProductsResponse {
  products: Product[];
}
export interface Product {
  code: string;
  name: string;
  description: string;
  stock: stocks;
  price: productDetails;
  summary: string;
  baseProduct: string;
  images: imageDetails;
  categories: categories;
}
export interface stocks {
  stockLevelStatus: stockLevelStatus0;
}
export interface stockLevelStatus0 {
  code: string;
}
export interface productDetails {
  currencyIso: string;
  value: number;
}
export interface imageDetails {
  image00: Image00[];
}
export interface Image00 {
  url: string;
}
export interface categories {
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor( private http: HttpClient) { }

  getData(): Observable<Product[]> {
    return this.http.get<ProductsResponse>('../assets/data.json').pipe(
      map(res => res.products)
    );
  }

  displayImageUrl( data: any ) {
    // display a 2D array, first index is product no.,
    // second is 0 to 3, 0 is item object, 1 is image url, 2 is product no., 3 is active or not for show details
    let array: any[][] = [];
    let i: number = 1;
    for (var item of data) {
      array.push([item, item.images?.[0].url, i, false]);
      i += 1;
    };
    return array;
  };
}

