import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  navLinks: any = [];

  constructor() { }

  ngOnInit() {
    this.createNavigationLinks();
  }

  createNavigationLinks() {
    this.navLinks.push({'name': 'Basic Details', 'link': '/vendor/details/user'},
                  {'name': 'Company', 'link': '/vendor/details/company'},
                  {'name': 'Equipments', 'link': '/vendor/details/equipment'});
  }

}
