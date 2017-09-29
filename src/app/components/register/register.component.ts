import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CategoryModule } from '../../modules/category/category.module';
import { CompareToDirective } from '../Shared/directives/compare-to.directive';

import { VendorApiserviceService } from '../../services/vendor-apiservice.service';
import { UtilityApiServiceService } from '../../services/utility-api-service.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^[1-9]{1}[0-9]{9}$/;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  categoryList: CategoryModule;
  isVendor: boolean;
  emailTaken: boolean;

  constructor(private vendorApiService: VendorApiserviceService, private route: ActivatedRoute, private util: UtilityApiServiceService,
    private router: Router) {
    this.route.url.subscribe(url => {
      if (url[0].path === 'registerVendor') {
        this.isVendor = true;
        this.getCategoryList();
      }
    });
   }

  ngOnInit() {
    this.createFormControls();
  }

  getCategoryList() {
    this.vendorApiService.getCategoriesList().subscribe((response: any) => {
      if (response.success) {
        this.categoryList = response.data;
        console.log(this.categoryList);
      }else {
        console.log(response.message);
      }
    });
  }

  createFormControls() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl(),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)
      ]),
      mobileNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(PHONE_REGEX)
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ]),
      termsAndCond: new FormControl()
    });

    if (this.isVendor) {
      this.registerForm.addControl('categoryId', new FormControl('', [
        Validators.required
      ]));
    }
  }

  register() {
    const data = this.registerForm.value;
    console.log(this.registerForm);
    /* if (this.isVendor) {
      this.vendorApiService.registerVendor(data).subscribe((response: any) => {
        if (response && response.success) {
          console.log(response);
          this.router.navigateByUrl('/home/login');
        }else {
          console.log(response);
        }
      });
    } */
  }

  checkEmailExist() {
    const email = this.registerForm.value.email;
    this.emailTaken = true;
    this.util.checkEmailExist(email).subscribe((response: any) => {
      if (response && response.success) {
        if (response.data) {
          this.emailTaken = true;
          console.log(this.emailTaken);
          // this.registerForm.controls['email'].setValidators([Validators.])
        }
      }
    });
  }

}
