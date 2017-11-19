import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontFormComponent } from './store-front-form.component';

describe('StoreFrontFormComponent', () => {
  let component: StoreFrontFormComponent;
  let fixture: ComponentFixture<StoreFrontFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreFrontFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFrontFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
