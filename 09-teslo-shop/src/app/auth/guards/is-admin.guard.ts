import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.services';
import { firstValueFrom } from 'rxjs';

export const isAdminGuard: CanMatchFn = async (
  route: Route,
  segments: UrlSegment[]
) => {

  const authService = inject(AuthService);

  await firstValueFrom(authService.checkStatus());

  return authService.isAdmin();
}
