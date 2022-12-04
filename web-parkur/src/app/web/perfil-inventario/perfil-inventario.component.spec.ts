import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInventarioComponent } from './perfil-inventario.component';

describe('PerfilInventarioComponent', () => {
  let component: PerfilInventarioComponent;
  let fixture: ComponentFixture<PerfilInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
