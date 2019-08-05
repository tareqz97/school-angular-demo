import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.css']
})
export class BreadcrumpComponent implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
