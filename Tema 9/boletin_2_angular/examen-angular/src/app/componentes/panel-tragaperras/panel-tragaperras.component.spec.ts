import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTragaperrasComponent } from './panel-tragaperras.component';

describe('PanelTragaperrasComponent', () => {
  let component: PanelTragaperrasComponent;
  let fixture: ComponentFixture<PanelTragaperrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelTragaperrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelTragaperrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
