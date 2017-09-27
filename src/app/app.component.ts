import { Component } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(private idle: Idle, private keepalive: Keepalive, private auth: AuthenticationService, private route: Router) {
    // sets an idle timeout of 10 min.
    idle.setIdle(600);
    // sets a timeout period of 1 min. after 11 min of inactivity, the user will be considered timed out.
    idle.setTimeout(60);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.';
      console.log(this.idleState);
    });

    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);
      this.route.navigateByUrl('/home/login');
    });

    idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!';
      console.log(this.idleState);
    });

    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!';
      console.log(this.idleState);
    });

    // sets the ping interval to 5 minutes
    keepalive.interval(300);

    keepalive.onPing.subscribe(() => {
      this.lastPing = new Date();
      console.log('Keep alive');

      if (localStorage.cre && JSON.parse(localStorage.cre).refresh_token) {
        auth.refreshToken({
          'grant_type': 'refresh_token',
          'client_id': `${environment.auth_client_id}`,
          'client_secret': `${environment.auth_secret}`,
          'refresh_token': JSON.parse(localStorage.cre).refresh_token
        });
      }
    });

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
}
