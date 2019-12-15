import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabRedesComponent } from './fab-redes.component';

describe('FabRedesComponent', () => {
  let component: FabRedesComponent;
  let fixture: ComponentFixture<FabRedesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabRedesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
