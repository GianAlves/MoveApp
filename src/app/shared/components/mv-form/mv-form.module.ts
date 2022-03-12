import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvInputComponent } from './mv-input/mv-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MvButtonComponent } from './mv-button/mv-button.component';

const components = [
    MvInputComponent,
    MvButtonComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...components]
})
export class MvFormModule { }
