import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';





@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'height'];
  // dataSource = information;
  // clickedRows = new Set<infotable>();

  dataSource: any;
  constructor() {
    this.dataSource = new MatTableDataSource<infotable>(information);
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface infotable {
  name: string;
  weight: number;
  height: number;
  position: number
}

const information: infotable[] = [
  { position: 1, name: "Nyan", weight: 140, height: 5.8 },
  { position: 2, name: "Lin", weight: 145, height: 5.6 },
  { position: 3, name: "Htoo", weight: 130, height: 5.3 },
  { position: 4, name: "Thin", weight: 135, height: 5.9 },
  { position: 5, name: "Zar", weight: 112, height: 5.4 },
  { position: 6, name: "Aung", weight: 110, height: 5.7 },
  { position: 7, name: "Nyan", weight: 140, height: 5.8 },
  { position: 8, name: "Lin", weight: 145, height: 5.6 },
  { position: 9, name: "Htoo", weight: 130, height: 5.3 },
  { position: 10, name: "Thin", weight: 135, height: 5.9 },
  { position: 11, name: "Zar", weight: 112, height: 5.4 },
  { position: 12, name: "Aung", weight: 110, height: 5.7 },
  { position: 13, name: "Nyan", weight: 140, height: 5.8 },
  { position: 14, name: "Lin", weight: 145, height: 5.6 },
  { position: 15, name: "Htoo", weight: 130, height: 5.3 },
  { position: 16, name: "Thin", weight: 135, height: 5.9 },
  { position: 17, name: "Zar", weight: 112, height: 5.4 },
  { position: 18, name: "Aung", weight: 110, height: 5.7 },
]


