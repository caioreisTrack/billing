import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Avatar } from '@components/avatar/avatar.component';
import { Heading } from '@components/text/heading/heading.component';

@Component({
  selector: 'view-avatar',
  standalone: true,
  imports: [Avatar, Heading],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AvatarView {

}
