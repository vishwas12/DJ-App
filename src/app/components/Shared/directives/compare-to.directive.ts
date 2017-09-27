import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCompareTo][formControlName],[appCompareTo],[formControl],[appCompareTo][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CompareToDirective),
      multi: true
    }
  ]
})

export class CompareToDirective implements Validator {

  constructor(@Attribute('appCompareTo') public appCompareTo: string,
              @Attribute('reverse') public reverse: string) { }

  private get isReverse() {
    if (!this.reverse) {
      return false;
    }
    return this.reverse === 'true' ? true : false;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    const v = c.value;

    // control value (e.g. password)
    const e = c.root.get(this.appCompareTo);

    // value not equal
    if (e && v !== e.value && !this.reverse) {
      return {
        appCompareTo: false
      };
    }

    if (e && v === e.value && this.isReverse) {
      delete e.errors['appCompareTo'];
      if (!Object.keys(e.errors).length) {
        e.setErrors(null);
      }
    }

    if (e && v !== e.value && this.isReverse) {
      e.setErrors({ appCompareTo: false });
    }
    return null;
  }
}
