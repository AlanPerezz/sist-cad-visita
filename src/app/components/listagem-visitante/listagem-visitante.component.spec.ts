import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemVisitanteComponent } from './listagem-visitante.component';

describe('ListagemVisitanteComponent', () => {
  let component: ListagemVisitanteComponent;
  let fixture: ComponentFixture<ListagemVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemVisitanteComponent]
    });
    fixture = TestBed.createComponent(ListagemVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
