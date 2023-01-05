import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testing'
})
export class TestingPipe implements PipeTransform {

  transform(val: number): number {
    return val.toString().length;
  }

}
