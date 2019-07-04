import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ScreenSizeService {

  public screenWidth: number = window.innerWidth;

  constructor() {
  }

  isMobileSize(): boolean {
    return this.screenWidth < MOBILE_SIZE;
  }
}

export const MOBILE_SIZE: number = parseInt(`${environment.mobile_size}`);
