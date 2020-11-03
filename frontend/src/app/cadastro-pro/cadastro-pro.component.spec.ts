import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProComponent } from './cadastro-pro.component';

describe('CadastroProComponent', () => {
  let component: CadastroProComponent;
  let fixture: ComponentFixture<CadastroProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
