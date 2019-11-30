import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerOfertaComponent } from './banner-oferta.component';

describe('BannerOfertaComponent', () => {
  let component: BannerOfertaComponent;
  let fixture: ComponentFixture<BannerOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
