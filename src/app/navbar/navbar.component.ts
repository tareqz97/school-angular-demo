import { Component, OnInit } from '@angular/core';
import * as breadcrump from '../title.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  path = 'Dashbord';
  pages = [
    {
      name: 'Home',
      active: true,
      routerLink : 'home'
    },
    {
      name :'Admin',
      active :false,
      routerLink :'admin'
    },
    {
      name : 'Teacher',
      active : false,
      routerLink :'teacher'
    },
    {
      name : 'Student',
      active : false
    },
    {
      name : 'Parent',
      active : false
    }

  ];
  constructor() {
   }
  ngOnInit() {
  }
  getRoute(){
    console.log(breadcrump.getPath());
    this.path = breadcrump.getPath();
  }
   
} 