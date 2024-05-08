import { Component } from '@angular/core';
import { NgClass, Location } from '@angular/common';
import { RouterLink,  RouterModule } from '@angular/router';

@Component({
  selector: 'app-bar01top',
  standalone: true,
  imports: [ NgClass, RouterLink, RouterModule ],
  templateUrl: './bar01top.component.html',
  styleUrl: './bar01top.component.css'
})
export class Bar01topComponent {
  navbarOpen = false;

  constructor(
    private location: Location,
  ) {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  goBack(): void {
    this.location.back();
  }
}
