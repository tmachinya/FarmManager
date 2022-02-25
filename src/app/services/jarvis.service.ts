import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JarvisService {
  private baseUrl = 'http://localhost:35555/api/farmmanager';
  private authUrl = 'http://localhost:35555/account';
  constructor(
      private http:HttpClient
  ) { }

  allEmployee()
  {
    return this.http.get(`${this.baseUrl}/all_employees`)
  }

}
