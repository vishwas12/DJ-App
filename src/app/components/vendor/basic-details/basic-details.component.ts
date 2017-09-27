import { Component, OnInit } from '@angular/core';

import { VendorApiserviceService } from '../../../services/vendor-apiservice.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  constructor(private VendorApiserviceService: VendorApiserviceService) { }

  ngOnInit() {
    this.VendorApiserviceService.getBasicDetails().subscribe((response: any) => {
      console.log(response);
    });
  }

}
