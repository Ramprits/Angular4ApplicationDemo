import { Icustomer } from './../model/icustomer';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'customerFilter'
})
// tslint:disable-next-line:class-name
export class customerFilterPipe implements PipeTransform {

    transform(value: Icustomer[], filterBy: string): Icustomer[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((customer: Icustomer) =>
            customer.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
