import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidateOnblur]'
})
export class ValidateOnblurDirective {
  private validators: any;
  private asyncValidators: any;

  constructor(public formControl: NgControl) { }

  @HostListener('focus')
  onfocus($event) {
    this.validators = this.formControl.control.validator;
    this.asyncValidators = this.formControl.control.asyncValidator;
    this.formControl.control.clearAsyncValidators();
    this.formControl.control.clearValidators();
  }

  @HostListener('blur')
  onblur($event) {
    this.formControl.control.setAsyncValidators(this.asyncValidators);
    this.formControl.control.setValidators(this.validators);
    this.formControl.control.updateValueAndValidity();
  }

}
