import { Component } from '@angular/core';
import { Heading } from '@components/text/heading/heading.component';
import { SecundaryButton } from '@components/button/secundary-button/secundary-button.component';
import { TertiaryOneButton } from '@components/button/tertiary-one/tertiary-one.component';
import { AlertButton } from '@components/button/alerts/alerts.component';
import { Lettering } from '@components/button/lettering/lettering.component';
import { PrimaryButton } from '@components/button/primary-button/primary-button.component';
import { TertiaryTwoButton } from '@components/button/tertiary-two/tertiary-two.component';
import { Body } from '@components/text/body/body.component';
import { Display } from '@components/text/display/display.component';
import { ChipComponent } from '../chip/chip.component';
import { MenuComponent } from '../menu/menu.component';



@Component({
  selector: 'app-heading',
  standalone: true,
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  imports: [Heading,]
})
export class HeadingComponent {
  title: any;
  onActidon(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
