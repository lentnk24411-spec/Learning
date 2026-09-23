import { Service } from '@angular/core';
import { Product } from '../classes/IProduct';

@Service()
export class ProductService {
    product:Product[] = [
        { id: 1, name: 'Laptop', price: 10, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJdTcwx4Vtm95hALoswn_p0YcdKvVRGpiDZfzLEeAdQ&s=10" },
        { id: 2, name: 'iphone 18', price: 20, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJdTcwx4Vtm95hALoswn_p0YcdKvVRGpiDZfzLEeAdQ&s=10" },
        { id: 3, name: 'Samsung Galaxy S23', price: 30, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJdTcwx4Vtm95hALoswn_p0YcdKvVRGpiDZfzLEeAdQ&s=10" },
        { id: 4, name: 'Samsung Galaxy S23', price: 30, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJdTcwx4Vtm95hALoswn_p0YcdKvVRGpiDZfzLEeAdQ&s=10" },
      ];
    constructor(){}
    getProducts() {
        return this.product;
    }
}
