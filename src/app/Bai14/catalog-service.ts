import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
    datas=[
        {"Cateid":"cate1","CateName":"nuoc ngot",
            "Products":[
                {"ProductId":"p1","ProductName":"Coca","Price":100,
"Image":"https://www.coca-cola.com/content/dam/onexp/vn/vi/brands/coca-cola/vn-coca-cola.png/width1960.png"},
                {"ProductId":"p2","ProductName":"Pepsi","Price":300,
"Image":"https://product.hstatic.net/1000288770/product/nuoc_ngot_pepsi_cola_lon_330ml_5d1df64d846f4f93aa666c723cea177d_master.jpg"},
                {"ProductId":"p3","ProductName":"Sting","Price":200,
"Image":"https://product.hstatic.net/200000078749/product/uoc_tang_luc_sting_dau_lon_330ml_copy_5f2eaa94e75c42c392d39d0286f244fa_0c55b2e03d01492eb7d195cb69da7ebd.jpg"},
        ]
    },
    {"Cateid":"cate2","CateName":"Bia",
        "Products":[
            {"ProductId":"p4","ProductName":"Heleiken","Price":500,
"Image":"https://cdn.hstatic.net/products/200000460455/bia_heineken_silver__lon_330ml__22436be471f749cd9aca53944254a534_master.png"},
            {"ProductId":"p5","ProductName":"333","Price":400,
"Image":"https://bizweb.dktcdn.net/thumb/grande/100/395/133/products/333-lon-jpeg.jpg?v=1593656075327"},
            {"ProductId":"p6","ProductName":"Sai Gon","Price":600,
"Image":"https://img.tgdd.vn/imgt/bhx/f_webp,fit_outside,quality_95,s_1560x1168/https://cdnv2.tgdd.vn/bhx-static/bhx/production/2026/2/image/Products/Images/2282/158346/bhx/bia-sai-gon-lager-lon-330ml_202602231136493971.jpg"},
        ]
    },
    ]
    constructor() { }
    getCategories()
    {
        return this.datas 
    }
}
