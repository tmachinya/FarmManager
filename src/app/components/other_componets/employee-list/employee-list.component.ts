import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeService} from "../../../services/other-services/employee.service";
import {JarvisService} from "../../../services/jarvis.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['../../stylings.css']
})
export class EmployeeListComponent implements OnInit {
  employees: string [];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstName','lastName','email','phoneNumber','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    searchKey: string;

  constructor(
      private service: EmployeeService,
      private Jarvis: JarvisService
  ) { }

  ngOnInit() {
    this.Jarvis.allEmployee().subscribe(
        emp =>{
          this.employees = emp as string [];
          this.listData = new MatTableDataSource<any>(this.employees);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        }
    )
  }

    onSearchClear() {
        this.searchKey = '';
        this.applyFilter();
    }
    applyFilter() {
        this.listData.filter = this.searchKey.trim().toLowerCase();
    }

    exportAsXLSX() {

    }

    onCreate() {

    }
}
