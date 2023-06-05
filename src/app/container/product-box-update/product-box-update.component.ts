import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-box-update',
  templateUrl: './product-box-update.component.html',
  styleUrls: ['./product-box-update.component.css']
})
export class ProductBoxUpdateComponent {
  shoeSizes: number[] = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  selectedSize: number | undefined;
  isDropdownOpen = false

  showFullDescription = false
  showFullName = false

  @Input() fullWidthMode = false

  @Input() product: Product | undefined

  @Output() addToCart = new EventEmitter()

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  onEditProduct() {
    
  }
}
