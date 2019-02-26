import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate() {
    if(!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/auth');
      return false
    }
    return true;
  }
}
