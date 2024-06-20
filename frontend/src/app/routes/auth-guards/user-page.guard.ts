import { DynamicCenteredModalService } from './../../services/dynamic-centered-modal.service';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

enum ModalType {
  LOGIN = 'login',
}

export const userPageGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const dynamicCenteredModalService = inject(DynamicCenteredModalService);

  if (cookieService.check('loginToken')) {
    return true;
  }

  dynamicCenteredModalService.setModal(ModalType.LOGIN, {
    isSigup: false,
    isMobile: true,
  });
  return false;
};
