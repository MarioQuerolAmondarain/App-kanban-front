import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TajetaPrioridadComponent } from './tajeta-prioridad.component';

describe('TajetaPrioridadComponent', () => {
  let component: TajetaPrioridadComponent;
  let fixture: ComponentFixture<TajetaPrioridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TajetaPrioridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TajetaPrioridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
