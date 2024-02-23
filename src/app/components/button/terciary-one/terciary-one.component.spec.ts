import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerciaryOneComponent } from './terciary-one.component';

describe('TerciaryOneComponent', () => {
  let component: TerciaryOneComponent;
  let fixture: ComponentFixture<TerciaryOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerciaryOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerciaryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
