import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmtcreateComponent } from './emtcreate.component';

describe('EmtcreateComponent', () => {
  let component: EmtcreateComponent;
  let fixture: ComponentFixture<EmtcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmtcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmtcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
