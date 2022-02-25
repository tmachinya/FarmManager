import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../services/other-services/employee.service";
import {JarvisService} from "../services/jarvis.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-user-profile',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employees: string [];
    listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['firstName'];


  constructor(
      private service: EmployeeService,
      private Jarvis: JarvisService
  ) { }

  ngOnInit() {
    this.Jarvis.allEmployee().subscribe(
        emp =>{
          this.employees = emp as string [];
          this.listData = new MatTableDataSource<any>(this.employees);
          console.log(this.employees);
        }
    )
  }

}
