import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const requiredPermission = route.data["permission"];

        if (!requiredPermission) {
            return true;
        }
        // auth service

        let canActivate = true;

        if (!canActivate) {
            this.router.navigate(['/todo/new']);
        }

        return canActivate;
    }
}
