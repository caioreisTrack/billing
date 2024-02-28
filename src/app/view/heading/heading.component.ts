import { Component } from '@angular/core';
import { Heading } from '@components/text/heading/heading.component';




@Component({
  selector: 'app-heading',
  standalone: true,
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  imports: [Heading,]
})
export class HeadingDesignComponent {
  title: any;
  onActidon(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
