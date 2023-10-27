import { Pipe, PipeTransform } from '@angular/core';
import { CoinsInterface } from '../entities/coinsInterface';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: CoinsInterface[], searchValue: string): CoinsInterface[] {
    if (!value) return [];
    if (!searchValue) return value;

    searchValue = searchValue.toLowerCase();

    return value.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
