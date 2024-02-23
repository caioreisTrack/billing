import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'text-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class Display {


  @Input() text!: string;
  @Input() weight: 'bold' | 'semiBold' | 'normal' | undefined;
  @Input() size!: 'display3' | 'display2' | 'display1';





  setTextSize = (): string => {
    if (this.size == 'display3') return 'text-display-small'
    if (this.size == 'display2') return 'text-display-medium'
    if (this.size == 'display1') return 'text-display-big'
    return 'text-display-medium'
  }
  setFontWeight = (): string => {

    if (this.weight == undefined) return 'font-weight: 400;'
    if (this.weight == 'bold') return 'font-weight: 800;'
    if (this.weight == 'semiBold') return 'font-weight: 600;'
    return 'font-weight: 400;'

  }
}
