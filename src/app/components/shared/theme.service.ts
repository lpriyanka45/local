import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export enum Theme{
  light='light',
  dark='dark',
}

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  themeColor:any='';
  // if(sessionStorage.getItem(this.themeColor)==)
  private mode: BehaviorSubject<Theme>=new BehaviorSubject(sessionStorage.getItem(this.themeColor));
  constructor() { }
  get mode$(): Observable<Theme>{
    return this.mode.asObservable();
  }
  toggleMode(){
    if(this.mode.value===Theme.light){
      this.mode.next(Theme.dark);
      // sessionStorage.setItem(this.themeColor,Theme.dark);
    }
    else{
      this.mode.next(Theme.light);
      // sessionStorage.setItem(this.themeColor,Theme.light);
    }
  }
  /*
  private _selectedTheme="";
  get selectedTheme(){
    return this._selectedTheme;
  }
  setSelectedTheme(theme: string){
    this._selectedTheme=theme;
  }
  setThemeToDefault(){
    this._selectedTheme="";
  }*/
}
