import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get<any>("https://fakestoreapi.com/products")
    .pipe( map((res: any) =>{
      return res;
    })

    )
  }
}
