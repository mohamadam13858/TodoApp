import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translation',
  standalone: false
})
export class TranslationPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'canceled':
        return 'لغو شده'
      case 'complated':
        return 'تگمیل شده'
      default:
        return value
    }
  }

}
