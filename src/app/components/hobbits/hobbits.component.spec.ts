import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbitsComponent } from './hobbits.component';

describe('HobbitsComponent', () => {
  let component: HobbitsComponent;
  let fixture: ComponentFixture<HobbitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
