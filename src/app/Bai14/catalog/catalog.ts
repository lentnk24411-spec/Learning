import { Component, signal } from '@angular/core';
import { CatalogService } from '../catalog-service';

@Component({
  selector: 'app-catalog',
  standalone: false,
  styleUrl: './catalog.css',
  templateUrl: './catalog.html',
})
export class Catalog {
  categories = signal<any[]>([]);

  constructor(private _service: CatalogService) {}

  ngOnInit(): void {
    this.categories.set(this._service.getCategories());
  }
}
