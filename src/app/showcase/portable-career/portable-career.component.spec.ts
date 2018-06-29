import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortableCareerComponent } from './portable-career.component';

describe('PortableCareerComponent', () => {
  let component: PortableCareerComponent;
  let fixture: ComponentFixture<PortableCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortableCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortableCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
