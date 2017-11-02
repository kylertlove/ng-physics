import { Injectable } from '@angular/core';

@Injectable()
export class StatisticsService {

  constructor() { }

  mean(array: number[]){
    let x = array.length;
    let y = 0;
    array.forEach( (val) => {
      y += val;
    });
    return y / x;
  }

  median(array: number[]) {
    let x = Math.floor(array.length / 2);
    array = array.sort();
    return array[x];
  }
}
