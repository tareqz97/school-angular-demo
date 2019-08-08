import { Component, OnInit } from '@angular/core';
import * as breadcrump from '../title.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    // console.log(this.route.snapshot.routeConfig.path);
    // this.service.Path();
    breadcrump.setPath(this.route.snapshot.routeConfig.path)
   }
  ngOnInit() {
  }

}
