import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form.utils';

@Component({
  selector: 'app-basic-page',
  imports: [ JsonPipe, ReactiveFormsModule ],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  private formBuilder = inject(FormBuilder);
  FormUtils = FormUtils;

  myForm: FormGroup = this.formBuilder.group({
    // field: ['', /** Validadores sincronos */, /** Validadores Asíncronos */],
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(10) ]],
    inStorage: [0, [ Validators.required, Validators.min(0) ]],
  });

  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0)
  // });

  // isValidField( fieldName:string ): boolean | null {
  //   return (
  //     this.myForm.controls[fieldName].errors &&
  //     this.myForm.controls[fieldName].touched
  //   )
  // };

  // getFieldError( fieldName:string ): string | null {

  //   if( !this.myForm.controls[fieldName]) return null;

  //   const errors = this.myForm.controls[fieldName].errors ?? {};

  //   for( const key of Object.keys(errors) ) {
  //     switch (key) {
  //       case 'required':
  //         return 'Este campo es requerido';

  //       case 'minlength':
  //         return `Minimo de ${ errors['minlength'].requiredLength } caracteres.`;

  //       case 'min':
  //         return `Valor minimo de ${ errors['min'].min }`;

  //       default:
  //         break;
  //     }
  //   }

  //   return null;
  // }

  onSubmit() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0,
      inStorage: 0,
    });

  }

}
