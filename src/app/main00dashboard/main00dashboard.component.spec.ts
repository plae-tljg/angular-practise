import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main00dashboardComponent } from './main00dashboard.component';

describe('Main00dashboardComponent', () => {
  let component: Main00dashboardComponent;
  let fixture: ComponentFixture<Main00dashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main00dashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Main00dashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
