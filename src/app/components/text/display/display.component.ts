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
  @Input() weight: Weight | undefined;
  @Input() size!: Size.small | Size.medium | Size.big;




  getButtonSize = (size: Size | undefined): string => {
    if (size == Size.small) return 'text-display-small'
    if (size == Size.medium) return 'text-display-medium'
    return 'text-display-big'
  }

}
