import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightRecommendComponent } from './right-recommend.component';

describe('RightRecommendComponent', () => {
  let component: RightRecommendComponent;
  let fixture: ComponentFixture<RightRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightRecommendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
