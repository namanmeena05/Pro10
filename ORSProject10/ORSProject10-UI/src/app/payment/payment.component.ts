import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  form: any = {
    data: {},
    message: null
  };

  constructor(private httpService: HttpClient, public serviceLocator: ServiceLocatorService, public route: ActivatedRoute) {

    var self = this;

    serviceLocator.getPathVariable(route, function (params) {
      self.form.data.id = params["id"];
      console.log('I GOT ID', self.form.data.id);
    })
  }

  ngOnInit() {

    if (this.form.data.id && this.form.data.id > 0) {
      this.display()
    }
  }

  save() {
    var self = this;
    this.httpService.post('http://localhost:8084/payment/save', this.form.data)
      .subscribe((res: any) => {

        
        self.form.inputerror = res.result.inputerror;
        if (res.success) {
           self.form.message = "Data added successfully";
          self.form.data = res.result.data;
          self.form.data.paymentMode = res.result.data.paymentMode;
        }
      }, error => {
        console.error('Error occurred while saving:', error);
      });
  }
  display() {
    var self = this;
    this.httpService.get('http://localhost:8084/payment/get/' + self.form.data.id).subscribe((res: any) => {

   
      if (res.success) {
        self.form.data.id = res.result.data.id;
        self.form.data.paymentMode = res.result.data.paymentMode;
        self.form.data.paymentAmount = res.result.data.paymentAmount;
        self.form.data.paymentStatus = res.result.data.paymentStatus;
        
      }
    })
  }

  update() {
  
    var self = this;
    this.httpService.post('http://localhost:8084/payment/update', this.form.data).subscribe((res: any) => {
      // self.form.message = res.result.message;
      self.form.error = res.result.inputerror;
      if (res.success) {
        self.form.data = res.result.data;
        self.form.message =res.result.message;

      }
    }, error => {
      console.error('Error occurred while saving:', error);
    });
  }
  
  }

