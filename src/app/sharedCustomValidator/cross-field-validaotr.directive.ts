import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appCrossFieldValidaotr]',
  providers: [
    {
        provide: NG_VALIDATORS,
        useExisting: CrossFieldValidaotrDirective,
        multi: true
    }]
})
export class CrossFieldValidaotrDirective implements Validator{

  @Input('appCrossFieldValidaotr') defaultVal: string;
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    //throw new Error("Method not implemented.");
    console.log('Control - value '+control.value);
    //console.log('defaultVal - value '+this.defaultVal);
    const conPassword = control.root.get(this.defaultVal).value;
    console.log('Password '+conPassword);
    if(control.value != conPassword){
        console.log('Passwd Mismatched   :: '+control.value+'   '+this.defaultVal);
        return {'passWdMismatch':true};
    }
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    return null;
  }

  constructor() { }

}
