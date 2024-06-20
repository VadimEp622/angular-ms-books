import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

export const userPageResolver: ResolveFn<any> = (route, state) => {
  return inject(AuthService).loginByToken(
    inject(AuthService).getLoginCookieToken()
  );
};
