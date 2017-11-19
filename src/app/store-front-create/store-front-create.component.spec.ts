import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontCreateComponent } from './store-front-create.component';

describe('StoreFrontCreateComponent', () => {
  let component: StoreFrontCreateComponent;
  let fixture: ComponentFixture<StoreFrontCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreFrontCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFrontCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
