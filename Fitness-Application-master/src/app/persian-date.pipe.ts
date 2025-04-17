import { Pipe, PipeTransform } from '@angular/core';
import jalaliMoment from "jalali-moment";

@Pipe({
  name: 'persianDate',
  standalone: false
})
export class PersianDatePipe implements PipeTransform {

  transform(value: Date): string {

    const persianDate = jalaliMoment(value).locale('fa').format('YYYY/MM/DD')

    return persianDate
  }

}
