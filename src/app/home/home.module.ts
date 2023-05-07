import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TableModule } from '../table';

import { HomeComponent } from './home.component';
import { routes } from './home.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}