import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as breadcrump from '../app/title.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school';
  activePath; 
  constructor(private route: ActivatedRoute) {
    // this.activePath = this.route.snapshot.routeConfig.path;
    breadcrump.setPath('')
   }
}
