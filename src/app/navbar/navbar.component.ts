import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    
  }
  // makeGetRequest(){
  //   return this.http.get(`/api/reviews/bakery1.0`).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   );
  // }
  ngOnInit() {
  }

}
