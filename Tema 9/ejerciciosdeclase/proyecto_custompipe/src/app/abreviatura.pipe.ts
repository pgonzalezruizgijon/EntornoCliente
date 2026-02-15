import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abreviatura',
  standalone: false
})
export class AbreviaturaPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.substring(0, 3) + "...";
  }

}