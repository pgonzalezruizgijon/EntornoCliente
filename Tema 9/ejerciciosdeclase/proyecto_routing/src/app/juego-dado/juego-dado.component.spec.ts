import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDadoComponent } from './juego-dado.component';

describe('JuegoDadoComponent', () => {
  let component: JuegoDadoComponent;
  let fixture: ComponentFixture<JuegoDadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegoDadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoDadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
