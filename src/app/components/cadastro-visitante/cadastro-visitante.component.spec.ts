import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVisitanteComponent } from './cadastro-visitante.component';

describe('CadastroVisitanteComponent', () => {
  let component: CadastroVisitanteComponent;
  let fixture: ComponentFixture<CadastroVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroVisitanteComponent]
    });
    fixture = TestBed.createComponent(CadastroVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
