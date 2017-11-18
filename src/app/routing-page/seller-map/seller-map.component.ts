import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-map',
  templateUrl: './seller-map.component.html',
  styleUrls: ['./seller-map.component.css']
})
export class SellerMapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
