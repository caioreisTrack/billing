import { Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { HeadingComponent } from './view/heading/heading.component';
import { ButtonComponent } from './view/button/button.component';
import { ChipComponent } from '@components/chip/chip.component';
import { TagsComponent } from '@components/tags/tags.component';
import { InputsComponent } from './view/inputs/inputs.component';

export const appRoutes: Routes = [{
    path: 'home',
    component: HomeComponent,
    data: {
        title: 'Home'
    }
}, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'heading',
    component: HeadingComponent,
    data: {
        title: 'Heading'
    }
}, {
    path: 'button',
    component: ButtonComponent,
    data: {
        title: 'Button'
    }
}, {
    path: 'chip',
    component: ChipComponent,
    data: {
        title: 'Chip'
    }
}, {
    path: 'tags',
    component: TagsComponent,
    data: {
        title: 'Tags'
    }
}, {
    path: 'inputs',
    component: InputsComponent,
    data: {
        title: 'Inputs'
    }
},];