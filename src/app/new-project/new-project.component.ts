import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/tutorial.service';
import { Tutorial } from '../tutorial-api';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  tutorial:Tutorial = {
    title:'',
    description:'',
    image:'',
    content:'',
    author:'',
    published:false,
    created_on:new Date(),
    updated_on:new Date(),
  }

  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial() {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      image: this.tutorial.image,
      content: this.tutorial.content,
      author: this.tutorial.author,
      published: this.tutorial.published,
      created_on: this.tutorial.created_on,
      updated_on: this.tutorial.updated_on,
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      image:'',
      content:'',
      author:'',
      published:false,
      created_on:new Date(),
      updated_on:new Date(),
    };
  }
}

