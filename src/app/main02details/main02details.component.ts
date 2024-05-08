import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { NgIf, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-main02details',
  standalone: true,
  imports: [ NgIf, RouterModule, FormsModule ],
  templateUrl: './main02details.component.html',
  styleUrl: './main02details.component.css'
})
export class Main02detailsComponent {
  data: any[] = [];
  commodity: any = [];  // the product which fits url :id

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataSharingService: DataSharingService,
  ) {}

  ngOnInit() {
    // Get the shared data from the data service
    this.dataSharingService.data$.subscribe( (data: any[]) => {
      this.data = data;
      this.getProductId();
    });
  }

  getProductId(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.commodity = this.data[id-1];
  }

  goBack(): void {
    this.location.back();
  }
}
