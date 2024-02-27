import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./view/menu/menu.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html', styleUrl: './app.component.scss',
  imports: [RouterOutlet, MenuComponent]
})
export class AppComponent {


  title = 'billing';


  public onActidon = (trem: string) => {
    console.log(trem)
  }


}
