import { TestBed } from '@angular/core/testing';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [
        EmployeesService,
        {provide: ToastrService, useClass: ToastrService}
      ]
    }).compileComponents();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
