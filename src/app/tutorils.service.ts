import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import { Tutorial } from './tutorial-api'; 

@Injectable({
  providedIn: 'root'
})
export class TutorilsService {

  private id;

  constructor(private http: HttpClient) { 
    this.id = 1;
  }

  tutorialUrl(){
   return this.http.get<Tutorial>("https://lucyy-tutorials-api.herokuapp.com/api/tutorials/").map((response: any) => response);
  }
}
