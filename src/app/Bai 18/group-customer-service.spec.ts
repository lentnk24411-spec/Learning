import { TestBed } from '@angular/core/testing';
import { GroupCustomerService } from './group-customer-service';

describe('GroupCustomerService', () => {
  let service: GroupCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
