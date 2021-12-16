import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Order[], filterText:string): Order[] {
    filterText = filterText?filterText.toLocaleLowerCase():""

    return filterText?value.filter
    (
      (o:Order)=>o.Order.toLocaleLowerCase().indexOf(filterText)!==-1 
    || o.Model.toLocaleLowerCase().indexOf(filterText)!==-1  
    || o.Country.toLocaleLowerCase().indexOf(filterText)!==-1
    || o.id.toString().indexOf(filterText)!==-1
  
    ):value
  }
}

