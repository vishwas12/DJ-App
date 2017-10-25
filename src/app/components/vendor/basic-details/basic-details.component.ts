import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  basicDetailsForm: FormGroup;
  states = [];
  cities = [];
  stateId = 0;
  stateByPin = 0;
  cityByPin: string;

  constructor(private VendorApiserviceService: VendorApiserviceService) {
    this.createFormControls();
    this.getStates();
  }

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
        this.setFormValues();
      }
    });
  }

  createFormControls() {
    this.basicDetailsForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl(),
      email: new FormControl({disabled: true}),
      mobileNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(PHONE_REGEX)
      ]),
      address: new FormGroup({
        pin: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6)
        ]),
        city: new FormControl('', [
          Validators.required
        ]),
        state: new FormControl('', [
          Validators.required
        ]),
        country: new FormControl('', [
          Validators.required
        ]),
        addLine1: new FormControl('', [
          Validators.required
        ]),
        addLine2: new FormControl()
      })
    });
  }

  setFormValues() {
    this.basicDetailsForm.controls['firstName'].setValue(this.basicDetails.firstName);
    this.basicDetailsForm.controls['lastName'].setValue(this.basicDetails.lastName);
    this.basicDetailsForm.controls['email'].setValue(this.basicDetails.email);
    this.basicDetailsForm.controls['mobileNumber'].setValue(this.basicDetails.mobileNumber);
    this.disableFormControls();
  }

  toggle(context) {
    if (context === 'update') {
      this.update = true;
      this.enableFormControls();
    }else if (context === 'cancel') {
      this.update = false;
      this.disableFormControls();
    }
  }

  disableFormControls() {
    this.basicDetailsForm.controls['firstName'].disable();
    this.basicDetailsForm.controls['lastName'].disable();
    this.basicDetailsForm.controls['email'].disable();
    this.basicDetailsForm.controls['mobileNumber'].disable();
  }

  enableFormControls() {
    this.basicDetailsForm.controls['firstName'].enable();
    this.basicDetailsForm.controls['lastName'].enable();
    this.basicDetailsForm.controls['email'].disable();
    this.basicDetailsForm.controls['mobileNumber'].enable();
  }

  fetchLocations() {
    this.VendorApiserviceService.getLocations(this.basicDetailsForm.get('address').get('pin').value).subscribe((response: any) => {
      this.stateByPin = response.data.stateId;
      this.cityByPin = response.data.district;
      for (let i = 0; i < this.states.length; i++) {
        if (this.stateByPin === this.states[i].stateId) {
          this.basicDetailsForm.get('address').get('state').setValue(this.states[i].stateId);
          break;
        }
      }
      if (this.basicDetailsForm.get('address').get('state').value !== null) {
        this.getCities();
      }
    });
  }

  getStates() {
    this.VendorApiserviceService.getAllStates().subscribe((response: any) => {
      this.states = response.data;
    });
  }

  getCities() {
    this.stateId = this.basicDetailsForm.controls['address'].get('state').value;
    this.VendorApiserviceService.getCitiesByState(this.stateId).subscribe((response: any) => {
      this.cities = response.data;
      for (let i = 0; i < this.cities.length; i++) {
        if (this.cities[i].cityName.toLowerCase() === this.cityByPin.toLowerCase()) {
          this.basicDetailsForm.get('address').get('city').setValue(this.cities[i].cityId);
        }
      }
    });
  }

}
