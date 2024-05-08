import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main01listComponent } from './main01list.component';

describe('Main01listComponent', () => {
  let component: Main01listComponent;
  let fixture: ComponentFixture<Main01listComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main01listComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Main01listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
