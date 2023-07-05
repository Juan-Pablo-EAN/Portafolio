import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  listIcons: any[] | undefined;

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.getIcons().then(icons => this.listIcons = icons);
  }

  goToLink(url: string) {
    window.open(url, '_blank')
  }
}
