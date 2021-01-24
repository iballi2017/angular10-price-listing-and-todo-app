import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule,MatIconModule,MatButtonModule,MatTableModule,MatFormFieldModule,MatInputModule
  ],
  exports: [
    MatToolbarModule,MatIconModule,MatButtonModule,MatTableModule,MatFormFieldModule,MatInputModule
  ]
})
export class MaterialModule { }
