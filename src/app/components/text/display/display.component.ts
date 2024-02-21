import { Component, Input, EventEmitter, OnInit, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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


  @Output() onClick = new EventEmitter<any>();

  onAction(event: any) {
    this.onClick.emit(event);
  }
}
