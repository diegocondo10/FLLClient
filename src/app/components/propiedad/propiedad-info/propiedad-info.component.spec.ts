import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadInfoComponent } from './propiedad-info.component';

describe('PropiedadInfoComponent', () => {
  let component: PropiedadInfoComponent;
  let fixture: ComponentFixture<PropiedadInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
