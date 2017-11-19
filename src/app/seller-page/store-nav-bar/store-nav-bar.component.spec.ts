import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNavBarComponent } from './store-nav-bar.component';

describe('StoreNavBarComponent', () => {
  let component: StoreNavBarComponent;
  let fixture: ComponentFixture<StoreNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
