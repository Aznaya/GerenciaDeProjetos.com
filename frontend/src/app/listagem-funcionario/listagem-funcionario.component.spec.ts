import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFuncionarioComponent } from './listagem-funcionario.component';

describe('ListagemFuncionarioComponent', () => {
  let component: ListagemFuncionarioComponent;
  let fixture: ComponentFixture<ListagemFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
