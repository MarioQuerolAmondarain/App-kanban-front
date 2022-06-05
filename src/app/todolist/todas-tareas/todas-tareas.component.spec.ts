import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasTareasComponent } from './todas-tareas.component';

describe('TodasTareasComponent', () => {
  let component: TodasTareasComponent;
  let fixture: ComponentFixture<TodasTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodasTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
