import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorHeaderComponent } from './vendor-header.component';

describe('VendorHeaderComponent', () => {
  let component: VendorHeaderComponent;
  let fixture: ComponentFixture<VendorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
