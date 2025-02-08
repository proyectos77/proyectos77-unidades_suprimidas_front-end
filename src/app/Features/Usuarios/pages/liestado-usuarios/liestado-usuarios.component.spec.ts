import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiestadoUsuariosComponent } from './liestado-usuarios.component';

describe('LiestadoUsuariosComponent', () => {
  let component: LiestadoUsuariosComponent;
  let fixture: ComponentFixture<LiestadoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiestadoUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiestadoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
