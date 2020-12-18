import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaProComponent } from './edita-pro.component';

describe('EditaProComponent', () => {
  let component: EditaProComponent;
  let fixture: ComponentFixture<EditaProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
