import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.css']
})
export class KnowledgesComponent implements OnInit {

  images: any[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1400px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '1220px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1100px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private photoService: ImagesService) { }

  ngOnInit(): void {
    this.photoService.getImages().then((images) => (this.images = images));
  }
}
