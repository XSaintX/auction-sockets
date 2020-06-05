import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Product } from '../product.model'

@Component({
  selector: 'app-subasta-list',
  templateUrl: './subasta-list.component.html',
  styleUrls: ['./subasta-list.component.css']
})
export class SubastaListComponent implements OnInit, AfterContentChecked {
  @Input() itemList: Product[]
  @Input() cantidaditems: Number = 0
  @Input() contador: string;
  public soldout: boolean = false;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {
    if (Number.isInteger(Number(this.contador))) {
      this.soldout = false;
    }
    this.cdref.detectChanges();
  }

  get customCss() {
    if (Number.isInteger(Number(this.contador))) {
      if (Number(this.contador) <= 5) {
        return 'blink_five'
      }
      if (Number(this.contador) <= 10) {
        return 'blink_me'
      }
      if (Number(this.contador) > 10) {
        return 'mayor'
      }
    }
    else {
      if (this.contador) {
        this.soldout = true;
        setTimeout(function () {
          document.getElementById('loading').style.display = 'none';
        }, 10000)
      }
    }
  }

}
