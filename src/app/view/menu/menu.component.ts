import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';

import { appRoutes } from '../../app.routes';
import { PrimaryButton } from '@components/button/primary-button/primary-button.component';
import { RouterModule } from '@angular/router';
import { Body } from '@components/text/body/body.component';


type linkInterface = { title: string, path: string }

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PrimaryButton, RouterModule, Body],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class MenuComponent implements OnInit {
  [x: string]: any;
  public navigationMenu: any[] | undefined;
  public toolbarLinks: any[] | undefined;
  public links: linkInterface[] | undefined

  public active!: string | '';
  constructor() { }

  ngOnInit() {
    const caption = 'Style Guide Billing';
    this.links = appRoutes.filter(route => {
      return route.data && route.data['title'];
    }).map(r => {
      return {
        title: r.data!['title'],
        path: '/' + r.path
      };
    });
    this.navigationMenu = [{
      key: caption,
      items: this.links
    }];
    this.toolbarLinks = this.links.map(link => {
      return {
        title: link.title,
        path: link.path,
        locateInMenu: 'always'
      };
    });
    this.toolbarLinks.push({
      title: caption,
      locateInMenu: 'never',
      location: 'before'
    });


  }

  setActive(page: string) {
    this.active = page;
  }

}
