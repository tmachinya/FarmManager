import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatIconModule,
      MatButtonModule,
      MatPaginatorModule,
      MatSortModule,
      MatFormFieldModule,
      FormsModule,
      MatInputModule

  ] ,
  exports:[
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatSortModule,
      MatIconModule,
      MatButtonModule,
      MatPaginatorModule,
      MatFormFieldModule,
      FormsModule,
      MatInputModule
  ]
})
export class SharedModule { }
