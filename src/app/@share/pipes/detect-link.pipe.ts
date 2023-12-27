import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detectLink'
})
export class DetectLinkPipe implements PipeTransform {

  transform(text: string): string {
    const pattern = /(^|[\s:"'])((ftp|http|https):\/\/)?(([a-z\d]([-\w]*[a-z\d])*\.)+[a-z]{2,6}\/?[\w\d/\-?=%&.:#;~_+]*)/gi;
    return text?.replace(pattern, '$1<a href="http://$4" target="_blank">$4</a>');
  }

}
