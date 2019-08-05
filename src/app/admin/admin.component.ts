import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  href = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
        console.log(this.router.url);
  }

}
