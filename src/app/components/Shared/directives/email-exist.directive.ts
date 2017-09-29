import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { UtilityApiServiceService } from '../../../services/utility-api-service.service';

@Directive({
  selector: '[appEmailExist][formControlName], [appEmailExist][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailExistDirective),
      multi: true
    }
  ]
})
export class EmailExistDirective implements Validator {

  isValid: boolean;

  constructor(private util: UtilityApiServiceService) { }

    validate(c: AbstractControl): Observable<{ [key: string]: any }> {
      return this.validateUniqueEmail(c.value).debounceTime(500).distinctUntilChanged().first();
    }

    validateUniqueEmail( email: string) {
      return new Observable(observer => {
        this.util.checkEmailExist(email).subscribe((response: any) => {
          if (response && response.success) {
            if (response.data) {
              observer.next({asyncInvalid: true});
            }else {
              observer.next(null);
            }
          }
        });
      });
    }

}
