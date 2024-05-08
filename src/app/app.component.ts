import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bar01topComponent } from './bar01top/bar01top.component';
import { Bar02leftComponent } from './bar02left/bar02left.component';
import { Bar03bottomComponent } from './bar03bottom/bar03bottom.component';
import { Main01listComponent } from './main01list/main01list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Bar01topComponent, Bar02leftComponent, Bar03bottomComponent, Main01listComponent, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'seller';
}
