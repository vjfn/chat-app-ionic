import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('name')) {
    return true;
  } else {
    const router = new Router();
    router.navigate(['/login']);
    return false;
  }
};
