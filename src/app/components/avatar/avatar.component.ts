import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { Heading } from '@components/text/heading/heading.component';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [Heading],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class Avatar {
  @Input() name!: string;
  @Input() style!: 'primary' | 'secundary' | 'tertiary';
  @Input() size!: 'big' | 'medium' | 'small';


  avatarName = (): string => {
    let name = '';
    const array: string[] = this.name.split('')

    if (array.indexOf(' ') == -1) {
      name = array[0];
    } else {
      const firstName = array[0]
      const secondName = array[array.indexOf(' ') + 1] ?? ''
      name = `${firstName}${secondName}`;
    }
    return name
  }
}
