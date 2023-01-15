import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaisyuiButtonComponent } from './daisyui-button.component';

describe('DaisyuiButtonComponent', () => {
  let component: DaisyuiButtonComponent;
  let fixture: ComponentFixture<DaisyuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaisyuiButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaisyuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
