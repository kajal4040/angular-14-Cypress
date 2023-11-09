import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(person: any) {
    return person.fName + ' ' + person.lName;
  }

}
