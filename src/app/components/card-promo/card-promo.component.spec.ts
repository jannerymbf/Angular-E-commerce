import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPromoComponent } from './card-promo.component';

describe('CardPromoComponent', () => {
  let component: CardPromoComponent;
  let fixture: ComponentFixture<CardPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
