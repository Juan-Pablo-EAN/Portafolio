import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getDataProjects() {
    return [
      {
        title: 'Gestor de notas',
        link: 'https://gestordenotasfront.azurewebsites.net/login'
      },
      {
        title: 'Páscitto Comics',
        link: 'https://www.pascitto-comics.com/'
      },
      {
        title: 'Divertimento',
        link: 'https://divertimento.netlify.app/'
      },
      {
        title: 'Diccionario catecúmeno',
        link: 'https://juan-pablo-20.github.io/diccionario-neocatecumenal/'
      },
      {
        title: 'La Tierra hoy',
        link: 'https://juan-pablo-20.github.io/la-tierra-hoy/'
      },
      {
        title: 'Explorador de Marte',
        link: 'https://explorador-de-marte.netlify.app/'
      },
      {
        title: 'Springfield Shopper',
        link: 'https://juan-pablo-ean.github.io/Springfield-Shopper/'
      },
      {
        title: 'Chatbot',
        link: 'https://juan-pablo-20.github.io/chatbot/'
      },
      {
        title: 'Juego de triky',
        link: 'https://juegodetriky.netlify.app/'
      },
      {
        title: 'Estrategia de marketing',
        link: 'https://guia1marketing.netlify.app/'
      },
      {
        title: 'Acerca de bases de datos',
        link: 'https://basesdedatos.netlify.app/'
      },
      {
        title: 'Blog de notas',
        link: 'https://blogdenotas.netlify.app/'
      }
    ];
  }

  getProjects() {
    return Promise.resolve(this.getDataProjects());
  }
}
