import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadFilterComponent } from './propiedad-filter.component';

describe('PropiedadFilterComponent', () => {
  let component: PropiedadFilterComponent;
  let fixture: ComponentFixture<PropiedadFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
