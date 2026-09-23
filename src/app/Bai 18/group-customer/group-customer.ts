import { Component, signal } from '@angular/core';
import { GroupCustomerService } from '../group-customer-service';

@Component({
  selector: 'app-group-customer',
  standalone: false,
  styleUrl: './group-customer.css',
  templateUrl: './group-customer.html',
})
export class GroupCustomer {
  customerGroups = signal<any[]>([]);
  errMessage = signal<string>('');

  constructor(private _service: GroupCustomerService) {}

  ngOnInit(): void {
    this._service.getGroupCustomers().subscribe({
      next: (data) => {
        this.customerGroups.set(data);
      },
      error: (err) => {
        this.errMessage.set(err.message);
      }
    });
  }
}
