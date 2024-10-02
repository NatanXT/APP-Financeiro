import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraderolarComponent } from './barraderolar.component';

describe('BarraderolarComponent', () => {
  let component: BarraderolarComponent;
  let fixture: ComponentFixture<BarraderolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraderolarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraderolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
