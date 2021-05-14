import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms'

@Directive({
  selector: '[appCustomValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
})
export class CustomValidatorDirective {

  constructor() { }

  validate(x) {
    // console.log(x.value)
    if(x.controls['password']) {
      // x.controls['password'].errors['test'] = false
      // console.log(x.controls['password'].errors)
      x.controls['password'].touched = true
    }
  }
}
