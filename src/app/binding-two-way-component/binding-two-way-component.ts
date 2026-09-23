import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {
  public hsa: number=0;
  public hsb: number=0;
  public hsc: number=0;
  public ketqua: string="";
  giaiPt2(){
    if(this.hsb==0 && this.hsc==0 ) {
      this.ketqua = "Phương trình vô số nghiệm";
    }
    else if (this.hsb==0 && this.hsc!=0) {
      this.ketqua = "Phương trình vô nghiệm";
    }
    else {
      this.ketqua = "x="+(-this.hsc/this.hsb);
    }
  }
}
