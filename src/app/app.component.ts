import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { DisplayComponent } from "./components/text/display/display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, DisplayComponent]
})
export class AppComponent implements OnInit {

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.theme.loadTheme('light_theme')
  }
  title = 'billing';
}
