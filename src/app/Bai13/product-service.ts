import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    productsImage=[
        {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"https://bizweb.dktcdn.net/thumb/large/100/469/765/products/9600015532062-6d8b7f36-75d6-4897-99f9-2c833495a9b0.jpg"},
        {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"https://bizweb.dktcdn.net/thumb/large/100/469/765/products/9600015532062-6d8b7f36-75d6-4897-99f9-2c833495a9b0.jpg"},
        {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"https://bizweb.dktcdn.net/thumb/large/100/469/765/products/9600015532062-6d8b7f36-75d6-4897-99f9-2c833495a9b0.jpg"}
    ];
    constructor() { }
    getProductsWithImages()
    {
        return this.productsImage
    }
    getProductDetail(id:any){
        return this.productsImage.find(x=>x.ProductId==id)
    }
}
