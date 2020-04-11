import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Connection to your backend
  endpoint: string = 'http://localhost:3000/api/products';
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  //GET all products
  getAllProducts(){
    let api = `${this.endpoint}`;
    return this.http.get(api, {headers: this.headers})
  }

  //GET product by ID
  getProduct(id: string): Observable<any> {
    let api = `${this.endpoint}/${id}`;
    return this.http.get(api, { headers: this.headers })
  }

  //ADD product
  addProduct(product: Product){
    let api = `${this.endpoint}/add`;
    return this.http.post(api, product,{headers: this.headers})
  }

  //UPDATE product
  updateProduct(id: string, product: Product){
    let api = `${this.endpoint}/${id}`;
    return this.http.put(api, product, {headers: this.headers})
  }

  //DELETE product
  deleteProduct(id: string){
    let api = `${this.endpoint}/${id}`;
    return this.http.delete(api,{headers: this.headers})
  }
}
