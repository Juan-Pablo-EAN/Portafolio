import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  getDataIcons() {
    return [
      {
        title: 'LinkedIn',
        typeIcon: 'linkedin',
        link: 'https://www.linkedin.com/in/juan-pablo-ballesteros-obando-21b371219/'
      },
      {
        title: 'Email',
        typeIcon: 'envelope',
        link: 'mailto:juan-ballesteros-26@hotmail.com'
      },
      {
        title: 'Whatsapp',
        typeIcon: 'whatsapp',
        link: 'https://wa.me/573213366682'
      },
      {
        title: 'Github 1',
        typeIcon: 'github',
        link: 'https://github.com/Juan-Pablo-EAN'
      },
      {
        title: 'Github 2',
        typeIcon: 'github',
        link: 'https://github.com/Juan-Pablo-20'
      }
    ];
  }

  getIcons() {
    return Promise.resolve(this.getDataIcons());
  }
}
