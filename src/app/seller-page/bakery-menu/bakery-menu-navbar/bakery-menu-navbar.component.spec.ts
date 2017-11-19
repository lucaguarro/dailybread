import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryMenuNavbarComponent } from './bakery-menu-navbar.component';

describe('BakeryMenuNavbarComponent', () => {
  let component: BakeryMenuNavbarComponent;
  let fixture: ComponentFixture<BakeryMenuNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryMenuNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryMenuNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
