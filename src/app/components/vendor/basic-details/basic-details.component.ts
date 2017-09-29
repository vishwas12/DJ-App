import { Component, OnInit } from '@angular/core';

import { VendorApiserviceService } from '../../../services/vendor-apiservice.service';

const PHONE_REGEX = /^[1-9]{1}[0-9]{9}$/;

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  basicDetails: any = {
    address: '',
    category: '',
    email: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    isEmailVerified: false
  };

  update: boolean;

  constructor(private VendorApiserviceService: VendorApiserviceService) { }

  ngOnInit() {
    this.VendorApiserviceService.getBasicDetails().subscribe((response: any) => {
      if (response && response.success) {
        const data = response.data;
        this.basicDetails.address = data.address;
        this.basicDetails.category = data.category;
        this.basicDetails.email = data.email;
        this.basicDetails.firstName = data.firstName;
        this.basicDetails.lastName = data.lastName;
        this.basicDetails.mobileNumber = data.mobileNumber;
        this.basicDetails.isEmailVerified = data.isEmailVerified;
      }
    });
  }

  toggle(context) {
    if (context === 'update') {
      this.update = true;
    }else if (context === 'cancel') {
      this.update = false;
    }
  }

}
