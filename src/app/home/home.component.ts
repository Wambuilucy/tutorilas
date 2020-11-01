import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial-api'; 
import { TutorialService } from 'src/app/tutorial.service';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  tutorial: Tutorial[]= [
    new Tutorial('Luciest','Lucy on it again', 'lucy.jpg','Lucy with angular problems ahah',
    'Abzed', true, new Date(2021,10,14), new Date(2021,10,14)),

    new Tutorial('Lucy','Lucy yu tha best', 'lucy.jpg','Lucy with Abzed is the best ahahahah',
    'Tet', true, new Date(2021,10,14), new Date(2021,10,14))
  ];

  constructor(private myApi:TutorialService, private http:HttpClient, private tutorialService: TutorialService) { }



  ngOnInit(): void {
    this.retrieveTutorials()
  }

  retrieveTutorials() {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials() {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTutorials();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}




  // this.http.get<Tutorial>("https://cors-anywhere.herokuapp.com/https://lucyy-tutorials-api.herokuapp.com/api/tutorials/").subscribe(data=>{
  //     // Succesful API request
  //     this.tutorial = data;
  //     console.log(data)
  //   })
  // }
// }

