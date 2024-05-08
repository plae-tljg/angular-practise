import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-bar02left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar02left.component.html',
  styleUrl: './bar02left.component.css'
})
export class Bar02leftComponent {
  constructor(private dataSharingService: DataSharingService){}

  cart: number[] = [];
  fetchedData: any[] =[];

  ngOnInit(): void {
    this.dataSharingService.data$.subscribe( fetchedData => {
      this.fetchedData = fetchedData;
    })
    this.dataSharingService.cart$.subscribe(cart => {
      this.cart = cart;
    })
  };

  deselect() {
    this.cart = [];
    this.dataSharingService.updateCart(this.cart);
  }
}


