import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoComponent } from './sucesso-link.component';

describe('SucessoLinkComponent', () => {
  let component: SucessoComponent;
  let fixture: ComponentFixture<SucessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucessoComponent]
    });
    fixture = TestBed.createComponent(SucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
