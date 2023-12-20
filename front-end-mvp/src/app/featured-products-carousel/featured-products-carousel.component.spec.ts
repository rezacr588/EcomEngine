import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductsCarouselComponent } from './featured-products-carousel.component';

describe('FeaturedProductsCarouselComponent', () => {
  let component: FeaturedProductsCarouselComponent;
  let fixture: ComponentFixture<FeaturedProductsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedProductsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProductsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
