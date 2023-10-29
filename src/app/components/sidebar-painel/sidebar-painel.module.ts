import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarPainelComponent } from './sidebar-painel.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SidebarPainelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarPainelComponent
  ]
})
export class SidebarPainelModule { }




