import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiqueDetailsComponent } from './musique-details.component';

describe('MusiqueDetailsComponent', () => {
  let component: MusiqueDetailsComponent;
  let fixture: ComponentFixture<MusiqueDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusiqueDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusiqueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
