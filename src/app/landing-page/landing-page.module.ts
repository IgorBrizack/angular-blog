import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './body/body.component';

@NgModule({
	declarations: [MenuComponent, MainComponent, BodyComponent],
	imports: [CommonModule],
	exports: [MainComponent],
})
export class LandingPageModule {}
