import {Component, Input} from '@angular/core';
import {ButtonType} from "./button-type";
import {ButtonSize} from "./button-size";

@Component({
  selector: 'lib-daisyui-button',
  templateUrl: './daisyui-button.component.html',
})
export class DaisyuiButtonComponent {
  @Input() disabled = false
  @Input() outlined = false
  @Input() active = false
  @Input() responsive = false
  @Input() wide = false
  @Input() icon?: SVGAElement
  @Input() loading = false
  @Input() noAnimation = false
  @Input() onClick?: () => void
  @Input() text?: string
  @Input() type?: ButtonType
  @Input() size?: ButtonSize

  handleClick() {
    this.onClick && this.onClick()
  }
}
