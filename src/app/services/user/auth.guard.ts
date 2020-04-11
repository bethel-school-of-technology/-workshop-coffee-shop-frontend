import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: UserService,
    public router: Router
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Check if User is Logged In (by calling helper function in the servicd file)
    if (this.authService.isLoggedIn !== true) {
      window.alert("Error 404 : Page Not Found!");
      this.router.navigate(['home'])
    }
    return true;
  }
}
