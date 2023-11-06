import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
    this.bemVindo();
  }

  bemVindo() {
    console.log('OnInit do home Component: Bem-vindo ao Angular!');
  }
}
