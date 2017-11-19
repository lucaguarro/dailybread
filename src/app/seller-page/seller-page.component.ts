import { Component, OnInit } from '@angular/core';
import { CurrentSellerService } from './current-seller.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css'],
  providers: [CurrentSellerService]
})
export class SellerPageComponent implements OnInit {
  id: number
  constructor( private route: ActivatedRoute, private currSlService: CurrentSellerService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.currSlService.setCurrentSeller(this.id);
        }
      )
  }

}
