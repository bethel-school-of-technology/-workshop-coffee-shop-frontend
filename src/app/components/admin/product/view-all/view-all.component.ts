import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  productlist: any = []

  constructor(
    public productService: ProductService,
  ) { }

  ngOnInit(): void {
    //Calling the service on component initialization
    this.productService.getAllProducts().subscribe(res => {
      this.productlist = res;
    })
  }

}
