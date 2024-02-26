import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Display } from "./components/text/display/display.component";
import { Body } from "./components/text/body/body.component";
import { Heading } from '@components/text/heading/heading.component';
import { PrimaryButton } from "./components/button/primary-button/primary-button.component";
import { SecundaryButton } from '@components/button/secundary-button/secundary-button.component';
import { TertiaryOneButton } from '@components/button/tertiary-one/tertiary-one.component';
import { TerciaryTwoButton } from "./components/button/terciary-two/terciary-two.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, Display, Body, Heading, PrimaryButton, SecundaryButton, TertiaryOneButton, TerciaryTwoButton]
})
export class AppComponent {


  title = 'billing';


  public onActidon = (trem: string) => {
    console.log(trem)
  }


}
