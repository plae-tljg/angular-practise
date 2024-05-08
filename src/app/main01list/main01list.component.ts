import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatCheckboxChange} from '@angular/material/checkbox';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'; 
import { PaginatePipe } from '../paginate.pipe';
import { FetchDataService } from '../fetch-data.service';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-main01list',
  standalone: true,
  imports: [ CommonModule, RouterModule, FormsModule, MatCheckboxModule, MatPaginatorModule, PaginatePipe ],
  templateUrl: './main01list.component.html',
  styleUrl: './main01list.component.css',
})
export class Main01listComponent implements OnInit {
  cart: number[] = [];
  fetchedData: any[][] = [];
  pageIndex: number = 0;
  pageSize: number = 4;


  constructor( private fetchDataService: FetchDataService, private dataSharingService: DataSharingService ){}

  ngOnInit(): void {
    this.fetchDataService.getData().subscribe(data => {
    this.fetchedData = this.fetchDataService.displayImageUrl(data);
    this.dataSharingService.updateData(this.fetchedData);})
    this.dataSharingService.cart$.subscribe( cart => {
      this.cart = cart;
    });
  }

  onProductSelect( event: MatCheckboxChange, product: number) {
    const checked = event.checked;
    console.log(checked);
    if (checked) {
      this.cart.push(product);
    } else {
      const index = this.cart.indexOf(product);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
    this.dataSharingService.updateCart(this.cart);
  };

  onPageChange(event: PageEvent) { 
    this.pageIndex = event.pageIndex; 
    this.pageSize = event.pageSize; 
  }
  
  toggleActive( item: number ) {
    this.fetchedData[item-1][3] = !this.fetchedData[item-1][3];
    return this.fetchedData[item-1][3]
  }  
}