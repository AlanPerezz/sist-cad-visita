import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVisitasComponent } from './cadastro-visitas.component';

describe('CadastroVisitasComponent', () => {
  let component: CadastroVisitasComponent;
  let fixture: ComponentFixture<CadastroVisitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroVisitasComponent]
    });
    fixture = TestBed.createComponent(CadastroVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
