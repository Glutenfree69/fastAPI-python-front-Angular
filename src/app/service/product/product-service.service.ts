import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  configUrl = "http://127.0.0.1:8000/posts"

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>(this.configUrl)
  }
}
