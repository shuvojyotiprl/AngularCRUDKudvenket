import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appSelectRequiredValidator]',
  providers: [
    {
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})
export class SelectRequiredValidatorDirective implements Validator{
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
   //throw new Error("Method not implemented.");
   // console.log(control.value);
   return (control.value == null || control.value == '') ? {'noDateSelected':'lol'} : null;
  }
  registerOnValidatorChange?(fn: () => void): void {
   return null;
  }

  constructor() { }

}
