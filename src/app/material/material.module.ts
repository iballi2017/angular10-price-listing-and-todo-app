import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule,MatIconModule,MatButtonModule,MatTableModule,MatFormFieldModule,MatInputModule,MatSidenavModule,MatOptionModule,MatSelectModule,MatListModule,MatDatepickerModule
  ],
  exports: [
    MatToolbarModule,MatIconModule,MatButtonModule,MatTableModule,MatFormFieldModule,MatInputModule,MatSidenavModule,MatOptionModule,MatSelectModule,MatListModule,MatDatepickerModule
  ]
})
export class MaterialModule { }
