import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartComponent } from './smart.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SmartComponent', () => {
  let component: SmartComponent;
  let fixture: ComponentFixture<SmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartComponent],
      imports:[HttpClientModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
