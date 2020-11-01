import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial-api'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutorials: Tutorial[]= [
    new Tutorial(1,'Luciest','Lucy on it again', 'lucy.jpg','Lucy with angular problems ahah',
    'Abzed', true, new Date(2021,10,14), new Date(2021,10,14)),

    new Tutorial(2,'Lucy','Lucy yu tha best', 'lucy.jpg','Lucy with Abzed problems ahahahah',
    'Tet', true, new Date(2021,10,14), new Date(2021,10,14))
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
