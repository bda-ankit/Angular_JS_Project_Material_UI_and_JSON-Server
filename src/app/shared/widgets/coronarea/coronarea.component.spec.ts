import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronareaComponent } from './coronarea.component';

describe('CoronareaComponent', () => {
  let component: CoronareaComponent;
  let fixture: ComponentFixture<CoronareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoronareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
