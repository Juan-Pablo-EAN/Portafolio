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
import { HobbitsComponent } from './components/hobbits/hobbits.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KnowledgesComponent,
    UniversityComponent,
    HobbitsComponent,
    CertificatesComponent,
    ExperienceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ImageModule,
    GalleriaModule,
    CarouselModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
