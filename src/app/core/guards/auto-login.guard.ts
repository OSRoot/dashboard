import { CanMatchFn } from '@angular/router';

export const autoLoginGuard: CanMatchFn = (route, segments) => {
  return true;
};
