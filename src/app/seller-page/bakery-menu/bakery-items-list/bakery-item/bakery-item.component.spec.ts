import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryItemComponent } from './bakery-item.component';

describe('BakeryItemComponent', () => {
  let component: BakeryItemComponent;
  let fixture: ComponentFixture<BakeryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
