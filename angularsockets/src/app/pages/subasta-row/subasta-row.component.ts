import { Component, OnInit, Input, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Product } from '../product.model'

@Component({
  selector: 'app-subasta-row',
  templateUrl: './subasta-row.component.html',
  styleUrls: ['./subasta-row.component.css']
})
export class SubastaRowComponent implements OnInit, AfterContentChecked {
  @Input() item: Product

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {    
    this.cdref.detectChanges();
  }

}