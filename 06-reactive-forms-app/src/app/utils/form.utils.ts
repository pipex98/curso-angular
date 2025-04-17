import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {
  // Expresiones regulares

  static getTextError( errors: ValidationErrors ) {
    for( const key of Object.keys(errors) ) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo de ${ errors['minlength'].requiredLength } caracteres.`;

        case 'min':
          return `Valor minimo de ${ errors['min'].min }`;

        default:
          break;
      };
    };

    return null;
  }

  static isValidField( form: FormGroup, fieldName:string ): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  };


  static getFieldError( form: FormGroup, fieldName:string ): string | null {

    if( !form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};

    return FormUtils.getTextError(errors);
  };

  static isValidFieldArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  };

  static getFieldErrorInArray( formArray: FormArray, index: number ): string | null {

    if( formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};

    return FormUtils.getTextError(errors);

  };

}
