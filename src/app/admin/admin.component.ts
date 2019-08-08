import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as breadcrump from '../title.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  href = '';
  activePath = '';
  
  constructor(private route: ActivatedRoute) {
    this.activePath = this.route.snapshot.routeConfig.path;
    breadcrump.setPath(this.activePath)
   }
   
  ngOnInit() {
  }

}
