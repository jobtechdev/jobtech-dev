import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitepaperdetailsComponent } from './whitepaperdetails.component';

describe('WhitepaperdetailsComponent', () => {
  let component: WhitepaperdetailsComponent;
  let fixture: ComponentFixture<WhitepaperdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitepaperdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitepaperdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
