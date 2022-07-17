import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { BordersComponent } from './borders/borders.component';
import { ColorsComponent } from './colors/colors.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  { path: 'colors/:type', component: ColorsComponent, title: 'SB Admin 2 - Colors' ,data: { key: 'value' } },
  { path: 'borders', component: BordersComponent, title: 'SB Admin 2 - Borders' },
  { path: 'animations', component: AnimationsComponent, title: 'SB Admin 2 - Animations' },
  { path: 'other', component: OtherComponent, title: 'SB Admin 2 - Other' },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
