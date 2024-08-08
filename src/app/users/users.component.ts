import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { UsersService, User } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})


export class UsersComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email','zipcode','phone','city'];
  

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => {
      console.log('This is my data', data)
      this.dataSource.data = data;
    }, (error) => {
      console.log('This is my error', error)
    })
  }
  dataSource = new MatTableDataSource<User>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private _liveAnnouncer: LiveAnnouncer, private service: UsersService) { }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


}
