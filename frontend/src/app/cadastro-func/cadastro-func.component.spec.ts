import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFuncComponent } from './cadastro-func.component';

describe('CadastroFuncComponent', () => {
  let component: CadastroFuncComponent;
  let fixture: ComponentFixture<CadastroFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroFuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
