import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerciaryTwoComponent } from './terciary-two.component';

describe('TerciaryTwoComponent', () => {
  let component: TerciaryTwoComponent;
  let fixture: ComponentFixture<TerciaryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerciaryTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerciaryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
