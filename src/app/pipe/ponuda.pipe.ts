import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ponudaAranzmana'
})
export class PonudaPipe implements PipeTransform {

  transform(value: any, filterString: string, svrhaPutovanja: string): any{
    if (!filterString) {
         return value;
         }
    if (value.lenght == 0 || filterString == ''){
      return value;
    }

    return value.filter(put =>
      put[svrhaPutovanja].toLowerCase().includes(filterString.toLowerCase())
  );
  }
}
