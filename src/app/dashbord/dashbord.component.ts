import { Card } from './dashbord.card';
import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  cards :Card[] = [
    new Card('Name','','../../assets/image/contact.png'),
    new Card('Email','','../../assets/image/email.png'),
    new Card('Phone Number','','../../assets/image/phone.png'),
    new Card('Address','','../../assets/image/location.png')
  ];

  // constructor(private route:ActivatedRoute) {
  //   console.log(this.route.routeConfig.path);
  //  }

  ngOnInit() {
  }

}
