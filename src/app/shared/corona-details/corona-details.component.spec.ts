import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaDetailsComponent } from './corona-details.component';

describe('CoronaDetailsComponent', () => {
  let component: CoronaDetailsComponent;
  let fixture: ComponentFixture<CoronaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoronaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
