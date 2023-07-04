import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getDataExperience() {
    return [
      {
        company: 'DXC Technology',
        logo: 'https://i.ibb.co/7GHg0WG/dxc.png',
        position: 'Fullstack Developer',
        date: '2022 - Present',
        description: 'My activities at DXC involve providing services to the client Avianca airline. This includes developing new applications, maintaining them, supporting the development and QA teams, performing unit testing, and deploying new code.'
      }
    ];
  }

  getExperience() {
    return Promise.resolve(this.getDataExperience());
  }
}
