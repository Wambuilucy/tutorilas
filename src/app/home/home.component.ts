import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial-api'; 
import {TutorilsService} from '../tutorils.service'
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tutorial: Tutorial;

  tutorials: Tutorial[]= [
    new Tutorial(1,'Luciest','Lucy on it again', 'lucy.jpg','Lucy with angular problems ahah',
    'Abzed', true, new Date(2021,10,14), new Date(2021,10,14)),

    new Tutorial(2,'Lucy','Lucy yu tha best', 'lucy.jpg','Lucy with Abzed is the best ahahahah',
    'Tet', true, new Date(2021,10,14), new Date(2021,10,14))
  ];

  constructor(private myApi:TutorilsService, private http:HttpClient) { }



  // getData(){
  //     let promise = new Promise((resolve, reject) => {
  //     this.myApi.tutorialUrl().toPromise().then( response =>{
  //       this.tutorial = response;
  //       console.log(response);     
        
  //       resolve()
  //     },
  //     error =>{
  //      alert("An error Occured. Please Wait!");
       
  //       reject(error)
  
  //     })
  
  //    })
  // }

  ngOnInit(): void {
    interface ApiResponse{
      tutorial: Tutorial;
  }


this.http.get<Tutorial>("https://cors-anywhere.herokuapp.com/https://lucyy-tutorials-api.herokuapp.com/api/tutorials/").subscribe(data=>{
    // Succesful API request
    this.tutorial = data;
    console.log(data)
  })
}


}
