import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationalChartComponent } from './combinational-chart.component';

describe('CombinationalChartComponent', () => {
  let component: CombinationalChartComponent;
  let fixture: ComponentFixture<CombinationalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinationalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
