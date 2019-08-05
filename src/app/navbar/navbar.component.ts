import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
   test = "home"
  ngOnInit() {
  }

}
