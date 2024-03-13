import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemVisitasComponent } from './listagem-visitas.component';

describe('ListagemVisitasComponent', () => {
  let component: ListagemVisitasComponent;
  let fixture: ComponentFixture<ListagemVisitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemVisitasComponent]
    });
    fixture = TestBed.createComponent(ListagemVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
