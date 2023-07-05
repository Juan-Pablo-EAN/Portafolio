import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService : ProjectsService) { }

  public listProjects : any[] | undefined;

  ngOnInit(): void {
    this.projectsService.getProjects().then(projects => this.listProjects = projects);
  }

  goToProject(url : string){
    window.open(url, '_blank');
  }

}
