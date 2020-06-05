import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRowComponent } from './product-row.component';

describe('ProductRowComponent', () => {
  let component: ProductRowComponent;
  let fixture: ComponentFixture<ProductRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
