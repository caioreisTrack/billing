import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'text-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class Heading {

  @Input() text!: string;
  @Input() weight: 'bold' | 'semiBold' | 'normal' | undefined;
  @Input() size!: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6';


  setTextSize = (): string => {
    if (this.size == 'heading1') return 'heading-text1'
    if (this.size == 'heading2') return 'heading-text2'
    if (this.size == 'heading3') return 'heading-text3'
    if (this.size == 'heading5') return 'heading-text5'
    if (this.size == 'heading6') return 'heading-text6'
    return 'heading-text4'
  }
  setFontWeight = (): string => {
    if (this.weight == 'bold') return 'font-weight: 800;'
    if (this.weight == 'semiBold') return 'font-weight: 600;'
    return 'font-weight: 400;'

  }

}
