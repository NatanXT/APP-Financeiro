import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasListaComponent } from './metas-lista.component';

describe('MetasListaComponent', () => {
  let component: MetasListaComponent;
  let fixture: ComponentFixture<MetasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetasListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
