import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  public saveToStorage(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public loadFromStorage(key: any): object | object[] | undefined {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  }

  public getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  public getRandBool(): boolean {
    return Math.round(Math.random()) === 0;
  }

  public makeId(length = 5) {
    let txt = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }
}
