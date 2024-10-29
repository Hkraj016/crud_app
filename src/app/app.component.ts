import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductTableComponent } from './product-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'crud_app';

}
