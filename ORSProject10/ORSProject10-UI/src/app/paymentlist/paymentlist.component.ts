import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core/src/render3';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {


  form: any = {
    searchParams: {},
    list: []
  }

  result: any = {};

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.search();

  }

  search() {

    var self = this
    this.httpClient.post("http://localhost:8084/payment/searchs", this.form.searchParams).subscribe((res: any) => {
      self.form.list = res.result.data;
    })
  }

  forward(page: any) {
    this.router.navigateByUrl(page);

  }

  

}

