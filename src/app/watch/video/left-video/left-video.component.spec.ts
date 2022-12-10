import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftVideoComponent } from './left-video.component';

describe('LeftVideoComponent', () => {
  let component: LeftVideoComponent;
  let fixture: ComponentFixture<LeftVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
