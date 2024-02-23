import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'text-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class Body {
  @Input() text!: string;
  @Input() weight: 'bold' | 'semiBold' | 'normal' | undefined;
  @Input() size!: 'body1' | 'body2' | 'body3' | 'caution';

  setTextSize = (): string => {
    if (this.size == 'body1') return 'body-text-1'
    if (this.size == 'body2') return 'body-text-2'
    if (this.size == 'body3') return 'body-text-3'
    if (this.size == 'caution') return 'caution'
    return 'body-text-2'
  }

  setFontWeight = (): string => {
    if (this.weight == 'bold') return 'font-weight: 800;'
    if (this.weight == 'semiBold') return 'font-weight: 600;'
    return 'font-weight: 400;'

  }
}
