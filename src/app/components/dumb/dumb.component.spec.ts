import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbComponent } from './dumb.component';
import { HttpClientModule } from '@angular/common/http';

describe('DumbComponent', () => {
  let component: DumbComponent;
  let fixture: ComponentFixture<DumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DumbComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(DumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display input data', () => {
    fixture.detectChanges();
    component.dumbData = {
      "name": "Kajal",
      "lastname": "Udani"
    };
    expect(component.dumbData.name).toEqual('Kajal');
  });
});
