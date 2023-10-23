import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Vanessa';
  year: number = 2023;
  job: string = 'desenvolvedora';
  pets = {
    name: 'Preta',
    age: 8, 
  }

  constructor() { }

  ngOnInit(): void {
      
  }
}
