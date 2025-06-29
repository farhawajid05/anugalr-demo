import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    const words: string[] = value.split(' ');
    const titleWords = [];

    words.forEach(word => {
      word = word.toLowerCase();
      titleWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    })

    return titleWords.join(' ');
  }

}
