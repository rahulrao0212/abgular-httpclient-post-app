import { Component, OnInit } from '@angular/core';
import { Person } from './model/person';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpclient-post-app';
  people: Person[] | undefined;
  person = new Person();

  constructor(private apiService: ApiService) {

  } 

  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people = data;
      })
  }

  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })
  }
}