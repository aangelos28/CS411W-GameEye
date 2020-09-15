import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidemenuComponent} from './components/sidemenu/sidemenu.component';
import {RouterModule} from '@angular/router';
import {MatRippleModule} from '@angular/material/core';
import {TitlebarComponent} from './components/titlebar/titlebar.component';

@NgModule({
    declarations: [
        NavbarComponent,
        SidemenuComponent,
        TitlebarComponent
    ],
    exports: [
        NavbarComponent,
        SidemenuComponent,
        TitlebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatRippleModule
    ]
})
export class NavigationModule {}
