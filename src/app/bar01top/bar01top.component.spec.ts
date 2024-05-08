import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar01topComponent } from './bar01top.component';

describe('Bar01topComponent', () => {
  let component: Bar01topComponent;
  let fixture: ComponentFixture<Bar01topComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bar01topComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bar01topComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
