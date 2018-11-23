import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobstoreComponent } from './jobstore.component';

describe('JobstoreComponent', () => {
  let component: JobstoreComponent;
  let fixture: ComponentFixture<JobstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
