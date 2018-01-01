import { NgModule } from '@angular/core';
import { I18NextModule } from 'angular-i18next';
import { ValidationMessageComponent, ValidationMessageModule } from 'angular-validation-message';

import { I18NextValidationMessageComponent } from './components/I18NextValidationMessageComponent';



export const declarations = [
  I18NextValidationMessageComponent,
];

export const providers = [
  {
    provide: ValidationMessageComponent,
    useValue: I18NextValidationMessageComponent
  }
];

@NgModule({
  declarations: declarations,
  exports: declarations,
  entryComponents: declarations,
  imports: [
    I18NextModule,
    ValidationMessageModule
  ],
  providers: providers
})
export class I18NextValidationMessageModule {}
