import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countChar',
})
export class CountCharPipe implements PipeTransform {


  transform(value: string | undefined | null, length: number): any {
    if (!value) return '';
    return value.slice(0, length) + '...'
  }


}
