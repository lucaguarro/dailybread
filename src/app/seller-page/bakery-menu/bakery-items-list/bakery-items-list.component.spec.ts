import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryItemsListComponent } from './bakery-items-list.component';

describe('BakeryItemsListComponent', () => {
  let component: BakeryItemsListComponent;
  let fixture: ComponentFixture<BakeryItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
