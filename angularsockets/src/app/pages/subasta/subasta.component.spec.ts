import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastaComponent } from './subasta.component';

describe('SubastaComponent', () => {
  let component: SubastaComponent;
  let fixture: ComponentFixture<SubastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
