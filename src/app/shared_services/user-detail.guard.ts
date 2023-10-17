import { Injectable, numberAttribute } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const id = route.paramMap.get('id');

    if (!id || isNaN(Number(id))) {
      // Invalid or missing id
      console.log('User ID is missing or invalid.');
      // Redirect to another page or show a message
      return this.router.createUrlTree(['user']);
    }

    return true;
  }
}
