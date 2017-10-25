import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-vendor-header',
  templateUrl: './vendor-header.component.html',
  styleUrls: ['./vendor-header.component.scss']
})
export class VendorHeaderComponent implements OnInit {

  @Output() onSidenav = new EventEmitter<boolean>();

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  logoutUser() {
    this.auth.logoutUser();
  }

  onToggleSidenav() {
    this.onSidenav.emit();
  }

}
