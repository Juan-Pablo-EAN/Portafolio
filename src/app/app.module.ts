import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageModule } from 'primeng/image';
import { KnowledgesComponent } from './components/knowledges/knowledges.component';
import { GalleriaModule } from 'primeng/galleria';
import { UniversityComponent } from './components/university/university.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ProjectsComponent } from './components/projects/projects.component';
import { ButtonModule } from 'primeng/button';
import { BackgroundsDirective } from './directives/backgrounds.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KnowledgesComponent,
    UniversityComponent,
    ExperienceComponent,
    FooterComponent,
    ProjectsComponent,
    BackgroundsDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ImageModule,
    GalleriaModule,
    CarouselModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
