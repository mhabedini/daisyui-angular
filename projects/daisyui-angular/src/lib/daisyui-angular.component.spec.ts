import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaisyuiAngularComponent } from './daisyui-angular.component';

describe('DaisyuiAngularComponent', () => {
  let component: DaisyuiAngularComponent;
  let fixture: ComponentFixture<DaisyuiAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaisyuiAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaisyuiAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
