import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidatasetsComponent } from './apidatasets.component';

describe('ApidatasetsComponent', () => {
  let component: ApidatasetsComponent;
  let fixture: ComponentFixture<ApidatasetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApidatasetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApidatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
