import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'text-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class DisplayComponent implements OnInit {
  ngOnInit(): void { }

  @Input() text!: string;
  @Input() weight: 'bold' | 'semiBold' | 'normal' | undefined;
  @Input() size!: 'small' | 'small' | 'big';




  getButtonSize = (size: string): string => {
    if (size == 'small') return 'text-display-small'
    if (size == 'big') return 'text-display-medium'
    return 'text-display-big'
  }
  setFontWeight = (): string => {

    if (this.weight == undefined) return 'font-weight: 400;'
    if (this.weight == 'bold') return 'font-weight: 800;'
    if (this.weight == 'semiBold') return 'font-weight: 600;'
    return 'font-weight: 400;'

  }
}
