import {NgModule} from '@angular/core';
import {DaisyuiAngularComponent} from './daisyui-angular.component';
import {DaisyuiButtonComponent} from './daisyui-button/daisyui-button.component';


const components = [
  DaisyuiAngularComponent,
  DaisyuiButtonComponent
]

@NgModule({
  declarations: components,
  imports: [],
  exports: components
})
export class DaisyuiAngularModule {
}
