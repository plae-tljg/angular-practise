import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar03bottomComponent } from './bar03bottom.component';

describe('Bar03bottomComponent', () => {
  let component: Bar03bottomComponent;
  let fixture: ComponentFixture<Bar03bottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bar03bottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bar03bottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
