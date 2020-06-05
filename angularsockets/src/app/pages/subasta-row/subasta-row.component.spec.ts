import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastaRowComponent } from './subasta-row.component';

describe('SubastaRowComponent', () => {
  let component: SubastaRowComponent;
  let fixture: ComponentFixture<SubastaRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubastaRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubastaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
