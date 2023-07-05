import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private experienceService : ExperienceService) { }

  public listExperience : any[] | undefined;

  ngOnInit(): void {
    this.experienceService.getExperience().then((experience) => (this.listExperience = experience));
  }

}
