import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detectLink'
})
export class DetectLinkPipe implements PipeTransform {

  transform(text: string): string {
    const pattern = /(^|\s)((?:https?:\/\/)?[\w-]+(?:\.[\w-]+)+\.?(:\d+)?(?:\/\S*)?)/gi;
    return text?.replace(pattern, function(match, prefix, url) {
      const fullURL = (url.startsWith('http') ? '' : 'https://') + url;
      return prefix + '<a href="' + fullURL + '" target="_blank">' + url + '</a>';
    });
  }

}
