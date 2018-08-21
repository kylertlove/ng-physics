import { Injectable } from '@angular/core';
import { ZTable } from '../models/zTable';
import { Point } from '../models/point';

@Injectable()
export class StatisticsService {

  constructor(private zTable: ZTable) { }

  /** Returns the average of a given number array */
  mean(array: number[]){
    let y = 0;
    array.forEach( (val) => {
      y += val;
    });
    return y / array.length;
  }

  /** Returns the median from a given array. (Floor of even length arrays)  */
  median(array: number[]) {
    let x = Math.floor(array.length / 2);
    array = array.sort();
    return array[x];
  }

  /** Returns the Range of a number set */
  range(arr: number[]) {
    return Math.max(...arr) - Math.min(...arr);
  }
/** Pass in the Set and value and it returns the percentile  */
  percentile(set:number[], value:number) {
      set = set.sort();
      let place = set.indexOf(value);
      if(place === -1) {
        return new Error("value not included in set")
      }else {
        return (place + 1)/set.length;
      }
  }

  /** Gives the Variance for a sample from the given array of numbers */
  sampleVariance(numArray: number[]){
    let avg = this.mean(numArray);
    let sum = 0;
    numArray.forEach( (num) => {
      num -= avg;
      num *= num;
      sum += num;
    });
    return (sum / (numArray.length -1));
  }

  /** Gives the Standard Deviation for a sample from the given array of numbers */
  sampleStandardDeviation(array: number[]){
    return Math.sqrt(this.sampleVariance(array));
  }

  /** Gives the Variance for a Population from the given array of numbers */
  populationVariance(numArray: number[]){
    let avg = this.mean(numArray);
    let sum = [];
    numArray.forEach( (num) => {
      num -= avg;
      num *= num;
      sum.push(num);
    });
    return this.mean(sum);
  }
  /** Gives the Standard Deviation for a Population from the given array of numbers */
  populationStandardDeviation(array: number[]){
    return Math.sqrt(this.populationVariance(array));
  }

  /** Gives the Percentile for a Population from the given array of numbers */
  // percentile(num: number, allNums: number[]){
  //   let z = 0;
  //   let avg = this.mean(allNums);
  //   let sd = this.sampleStandardDeviation(allNums);

  //   z = (num - avg) / sd;

  //   return this.zTable.getScore(z);
  // }

}
