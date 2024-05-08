import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main02detailsComponent } from './main02details.component';

describe('Main02detailsComponent', () => {
  let component: Main02detailsComponent;
  let fixture: ComponentFixture<Main02detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main02detailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Main02detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
