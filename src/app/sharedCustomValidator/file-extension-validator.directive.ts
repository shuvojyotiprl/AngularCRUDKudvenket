import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appFileExtensionValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FileExtensionValidatorDirective,
      multi: true
    }]
})
export class FileExtensionValidatorDirective implements Validator {
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    console.log(control.value);

    const var_string = control.value;
    if (var_string != null) {
      console.log('no null value');
      if (var_string.indexOf('.png') > -1) {
        console.log('valid format'+var_string.indexOf('.png') );
        return null;
      }
      else {
        console.log('invalid format'+var_string.indexOf('.png') );
        return { 'invalidFileFormat': 'only .png is supported' };
      }
    }
    else {
      return null;
    }

  }
  registerOnValidatorChange?(fn: () => void): void {
    return null;
  }

  constructor() { }

}
