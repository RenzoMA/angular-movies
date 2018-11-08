import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertaimentContainerComponent } from './entertaiment-container.component';

describe('EntertaimentContainerComponent', () => {
  let component: EntertaimentContainerComponent;
  let fixture: ComponentFixture<EntertaimentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertaimentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertaimentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
