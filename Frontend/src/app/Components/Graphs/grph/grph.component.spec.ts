import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrphComponent } from './grph.component';

describe('GrphComponent', () => {
  let component: GrphComponent;
  let fixture: ComponentFixture<GrphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
