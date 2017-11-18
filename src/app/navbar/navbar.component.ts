import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http: Http) { 
    
  }
  makeGetRequest(){
    return this.http.get(`/api/reviews/bakery1.0`).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  ngOnInit() {
  }

}
