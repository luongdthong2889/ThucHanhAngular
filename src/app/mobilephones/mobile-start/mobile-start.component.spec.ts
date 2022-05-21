import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStartComponent } from './mobile-start.component';

describe('MobileStartComponent', () => {
  let component: MobileStartComponent;
  let fixture: ComponentFixture<MobileStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
