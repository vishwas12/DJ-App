import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private AuthenticationService: AuthenticationService) { }

  ngOnInit() {
    this.AuthenticationService.isAuthenticated.subscribe(data => {
      this.isLoggedIn = data;
    });
  }

}
