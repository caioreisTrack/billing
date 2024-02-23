import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { Display } from "./components/text/display/display.component";
import { Body } from "./components/text/body/body.component";
import { Heading } from '@components/text/heading/heading.component';
import { PrimaryButton } from "./components/button/primary-button/primary-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, Display, Body, Heading, PrimaryButton]
})
export class AppComponent implements OnInit {

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.theme.loadTheme('light_theme')
  }
  title = 'billing';

}
