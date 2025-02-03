import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import HeaderComponent from "./Dashboard/layout/header/header.component";

import SidebarComponent from './Dashboard/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,  SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export  class AppComponent {
  title = 'unidades_suprimidas ';
}
