import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {
    
   }
   getUsers() {
    return this.http.get<any>('/assets/data.json');
  }
}
