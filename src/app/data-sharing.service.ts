import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  private cartSubject = new BehaviorSubject<number[]>([]);
  data$ = this.dataSubject.asObservable();
  cart$ = this.cartSubject.asObservable();

  updateData(newData: any[]) {
    this.dataSubject.next(newData);
  }
  updateCart(newCart: number[]) {
    this.cartSubject.next(newCart);
  }
}
