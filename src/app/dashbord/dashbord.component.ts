import { Card } from './dashbord.card';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as breadcrump from '../title.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  activePath;
  cards :Card[] = [
    new Card('Name','','../../assets/image/contact.png'),
    new Card('Email','','../../assets/image/email.png'),
    new Card('Phone Number','','../../assets/image/phone.png'),
    new Card('Address','','../../assets/image/location.png')
  ];
  ngOnInit() {
  }
  constructor(private route: ActivatedRoute) {
    this.activePath = this.route.snapshot.routeConfig.path;
    breadcrump.setPath(this.activePath)
   }

}
