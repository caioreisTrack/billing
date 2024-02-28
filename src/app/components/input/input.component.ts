import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, NO_ERRORS_SCHEMA, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class InputComponent {

  @Input() type: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() icon: string | undefined;
  @Output() onChange = new EventEmitter<string>()

  value!: any;

  sendTheNewValue(event: any) {
    this.value = event.target.value;

    this.onChange.emit(this.value)

  }
}
