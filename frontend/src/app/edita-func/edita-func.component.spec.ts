import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaFuncComponent } from './edita-func.component';

describe('EditaFuncComponent', () => {
  let component: EditaFuncComponent;
  let fixture: ComponentFixture<EditaFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaFuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
