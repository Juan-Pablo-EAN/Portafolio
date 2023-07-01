import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getData() {
    return [
      {
        itemImageSrc: 'https://i.ibb.co/N3t8KVv/javascript.png',
        thumbnailImageSrc: '',
        alt: 'Javascript',
        title: 'Javascript'
      },
      {
        itemImageSrc: 'https://i.ibb.co/8Pz8891/csharp.png',
        thumbnailImageSrc: '',
        alt: 'C#',
        title: 'C#'
      },
      {
        itemImageSrc: 'https://i.ibb.co/VMgz1cx/java.png',
        thumbnailImageSrc: '',
        alt: 'Java',
        title: 'Java'
      },
      {
        itemImageSrc: 'https://i.ibb.co/D4KQSr4/netcore.png',
        thumbnailImageSrc: '',
        alt: '.Net Core',
        title: '.Net Core'
      },
      {
        itemImageSrc: 'https://i.ibb.co/fqBkKkW/angular.png',
        thumbnailImageSrc: '',
        alt: 'Angular',
        title: 'Angular'
      },
      {
        itemImageSrc: 'https://i.ibb.co/mbcpyxS/sql.png',
        thumbnailImageSrc: '',
        alt: 'SQL',
        title: 'SQL'
      },
      {
        itemImageSrc: 'https://i.ibb.co/n8qXyTr/azure.png',
        thumbnailImageSrc: '',
        alt: 'Azure',
        title: 'Azure'
      },
      {
        itemImageSrc: 'https://i.ibb.co/MNhndjZ/html.png',
        thumbnailImageSrc: '',
        alt: 'HTML',
        title: 'HTML'
      },
      {
        itemImageSrc: 'https://i.ibb.co/8mYmyD4/css.png',
        thumbnailImageSrc: '',
        alt: 'CSS',
        title: 'CSS'
      }
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}
