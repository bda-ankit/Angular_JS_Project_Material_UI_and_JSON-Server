import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BycompanyComponent } from './bycompany.component';

describe('BycompanyComponent', () => {
  let component: BycompanyComponent;
  let fixture: ComponentFixture<BycompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BycompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
