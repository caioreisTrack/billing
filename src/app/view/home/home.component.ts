import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Avatar } from '@components/avatar/avatar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Avatar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class HomeComponent {

}
