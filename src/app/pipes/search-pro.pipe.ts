import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../models/product.model';

@Pipe({
  name: 'searchPro'
})
export class SearchProPipe implements PipeTransform {

  transform(allProducts: product[] = [], val: string = ''): any {
    if (!val.trim()) {
      return allProducts;
    }

    return allProducts.filter((item: product) =>
      item?.['name']?.toUpperCase().includes(val.toUpperCase())
    );
  }
}
