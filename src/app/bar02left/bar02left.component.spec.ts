import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar02leftComponent } from './bar02left.component';

describe('Bar02leftComponent', () => {
  let component: Bar02leftComponent;
  let fixture: ComponentFixture<Bar02leftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bar02leftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bar02leftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
