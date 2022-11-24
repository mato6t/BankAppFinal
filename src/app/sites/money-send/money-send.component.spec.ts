import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneySendComponent } from './money-send.component';

describe('MoneySendComponent', () => {
  let component: MoneySendComponent;
  let fixture: ComponentFixture<MoneySendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneySendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneySendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
