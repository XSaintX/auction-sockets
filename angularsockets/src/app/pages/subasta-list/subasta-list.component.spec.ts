import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastaListComponent } from './subasta-list.component';

describe('SubastaListComponent', () => {
  let component: SubastaListComponent;
  let fixture: ComponentFixture<SubastaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubastaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubastaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
