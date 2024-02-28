import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, NO_ERRORS_SCHEMA, } from '@angular/core';
import { InputComponent } from '@components/input/input.component';

@Component({
  selector: 'view-inputs',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss',

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class InputsViewComponent {

  value: any;




  sendTheNewValue(value: any) {
    this.value = value;
  }
}


