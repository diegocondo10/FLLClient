import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBasicoComponent } from './chat-basico.component';

describe('ChatBasicoComponent', () => {
  let component: ChatBasicoComponent;
  let fixture: ComponentFixture<ChatBasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
