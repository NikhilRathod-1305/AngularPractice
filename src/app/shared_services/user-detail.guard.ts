import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserDetailGuard implements CanActivate {
  constructor(private router: Router, private commonService: CommonService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const id = route.paramMap.get('id');

    if (!id || isNaN(Number(id))) {
       this.router.createUrlTree(['users']); // Invalid or missing ID
    }

    return this.commonService.GetCurrentData(id).pipe(
      map((users) => {
        if (!users) {
          return this.router.createUrlTree(['users']); // User with the specified ID doesn't exist
        }
        return true; // User with the specified ID exists
      }),
      catchError(async () => this.router.createUrlTree(['users'])) // Handle errors
    );
  }
}
